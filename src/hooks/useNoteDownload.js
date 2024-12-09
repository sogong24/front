import { useState } from 'react';
import axios from '../api/axios';
import usePoints from './usePoints';
function useNoteDownload() {

    const [error, setError] = useState(null);
    const { checkAndDeductPoint } = usePoints();

    const downloadNote = async (noteId) => {
        const token = localStorage.getItem('token');

        if(!token || !userInfo) {
            setError('로그인 후 이용해주세요');
            return;
        }

        try {
            setError(null);

            const canDownload = await checkAndDeductPoint(noteId);
            if(!canDownload) {
                return;
            }

            const response = await axios.get(`http://localhost:3000/api/notes/${noteId}/download`, {
                responseType: 'blob',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a'); // HTMl의 <a> tag
            link.href = url;

            const contentDisposition = response.headers['content-disposition'];
            let filename = 'note.pdf';
            if(contentDisposition) {
                const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                if(filenameMatch && filenameMatch.length === 2) filename = filenameMatch[1];
                // [
                //   'filename="미분적분학_1주차.pdf"',  // match[0]: 전체 매칭
                //   '미분적분학_1주차.pdf'              // match[1]: 첫 번째 캡처 그룹
                // ]
            }
            link.setAttribute('download',filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            // 가상의 link를 dom에 추가 -> 클릭 이벤트 발생 -> 다운로드 클릭 이벤트(브라우저에서 즉시 시작(비동기)) 
            // 가상 링크 DOM에서 제거 -> createObjectURL로 생성한 임시 url 제거 
        } catch (err) {
            if(err.response) {
                switch(err.response.status) {
                    case 401:
                        setError('인증 만료, 다시 로그인 해주세요');
                        break;
                    case 403:
                        setError('권한이 없습니다');
                        break;
                    case 404:
                        setError('노트를 찾을 수 없습니다.');
                        break;
                    default:
                        setError('다운로드에 실패하였습니다. 다시 시도해주세요.');
                }
            } else {
                setError('서버 오류가 발생했습니다. 다시 시도해주세요.');
            } 
            console.error('error: ', err);
        }
    };

    return { downloadNote, error };
}

export default useNoteDownload;