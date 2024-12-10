import { useState } from 'react';
import api from '../api/axios';

function useNoteDetail() {
    const [noteInfo, setNoteInfo] = useState(null);
    const [error, setError] = useState(null);

    const getNoteDetail = async (noteID) => {
        try {
            setError(null);
            const token = localStorage.getItem('token');

            if (!token) {
                setError('로그인이 필요합니다.');
                return null;
            }

            const response = await api.get(`/api/notes/${noteID}/detail`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            console.log('노트 상세 정보:', response.data);
            setNoteInfo(response.data);
            return response.data;

        } catch (err) {
            console.error('노트 정보 조회 실패:', err);
            setError(err.response?.data?.message || '노트 정보를 불러오지 못했습니다.');
            return null;
        } finally {
        }
    };

    return { noteInfo, error, getNoteDetail };
}

export default useNoteDetail;