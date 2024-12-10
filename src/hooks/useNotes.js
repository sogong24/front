import { useState } from 'react';
import api from '../api/axios';

function useNotes() {

    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);

    const getNotes = async (courseId) => {
        try {
            // 백엔드 endpoint 확인 필요
            const response = await api.get(`/api/notes/${courseId}`);
            if(!response.data || (Array.isArray(response.data) && response.data.length === 0 )) {
                console.log('아직 게시된 강의 노트가 없습니다.');
            }

            const data = await response.data;
            setNotes(data);
        } catch (error) {
            setError('강의 노트 조회 중 오류 발생');
            console.log('error 상세: ', error.response);
        }
    };

    return { notes, error, getNotes };
}

export default useNotes;