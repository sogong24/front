import { useState } from 'react';
import api from '../api/axios';

function useNoteDetail() {
    const [noteInfo, setNoteInfo] = useState(null);
    const [error, setError] = useState(null);

    const getNoteDetail = async (noteID) => {
        try {
            setError(null);
            const token = localStorage.getItem('token');

            console.log('요청 URL:', `/api/notes/detail/${noteID}`);
            console.log('noteId:', noteID);

            if (!token) {
                setError('로그인이 필요합니다.');
                return null;
            }

            const response = await api.get(`/api/notes/detail/${noteID}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('응답 데이터:', response.data); 
            setNoteInfo(response.data);
            return response.data;
        } catch (err) {
            console.error('노트 정보 조회 실패:', err);
            console.error('에러 응답:', err.response?.data);  // 에러 응답 확인
            console.error('상태 코드:', err.response?.status);
            setError(err.response?.data?.message || '노트 정보를 불러오지 못했습니다.');
            return null;
        } finally {
        }
    };

    return { noteInfo, error, getNoteDetail };
}

export default useNoteDetail;