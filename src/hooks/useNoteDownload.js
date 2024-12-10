import { useState } from 'react';
import api from '../api/axios';

function useNoteDownload() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const downloadNote = async (noteID)=> {
        try {
            setError(null);
            setLoading(true);
            const token = localStorage.getItem('token');
            
            if (!token) {
                setError('로그인이 필요합니다.');
                return false;
            }

            // JWT 토큰에서 사용자 ID 추출
            const payload = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(payload));
            const userID = decodedPayload.userId;

            // 1. 먼저 노트 구매 시도
            try {
                await api.post(`/api/notes/${noteID}/purchase/${userID}`);
            } catch (purchaseError) {
                if (purchaseError.response?.status === 403) {
                    setError('포인트가 부족합니다.');
                    return false;
                }
                throw purchaseError;
            }

            // 2. 구매 성공 후 다운로드 시도
            const response = await api.get(`/api/notes/${noteID}/download/${userID}`, {
                responseType: 'blob'
            });

            // 에러 응답 체크
            if (response.data instanceof Blob && response.data.type === 'application/json') {
                const text = await response.data.text();
                const error = JSON.parse(text);
                throw new Error(error.message || '다운로드에 실패했습니다.');
            }

            // 파일 다운로드 처리
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            
            // Content-Disposition 헤더에서 파일명 추출
            const contentDisposition = response.headers['content-disposition'];
            let filename = 'note.pdf';
            if (contentDisposition) {
                // filename="노트제목.pdf" 형식에서 파일명 추출
                const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                const matches = filenameRegex.exec(contentDisposition);
                if (matches != null && matches[1]) {
                    filename = matches[1].replace(/['"]/g, '');
                    // URL 인코딩된 파일명 디코딩
                    try {
                        filename = decodeURIComponent(filename);
                    } catch (e) {
                        // 디코딩 실패 시 원본 값 사용
                        console.warn('파일명 디코딩 실패:', e);
                    }
                }
            }
            
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            return true;
        } catch (err) {
            console.error('노트 다운로드 실패:', err);
            if (err.response?.status === 400) {
                setError('이미 구매한 노트입니다.');
            } else {
                setError(err.response?.data?.error || '다운로드에 실패했습니다.');
            }
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { downloadNote, error, loading };
}

export default useNoteDownload;