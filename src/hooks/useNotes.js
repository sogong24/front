import { useEffect ,useState } from 'react';
import api from '../api/axios';

function useNotes(courseId) {

    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                // 백엔드 endpoint 확인 필요
                const response = await api.get(`/api/notes/${courseId}`);
                console.log('Note-API 응답 타입: ', typeof response.data);
                console.log('Note-API 응답 결과: ', response.data);

                if(!response.data || (Array.isArray(response.data) && response.data.length === 0 )) {
                    console.log('아직 게시된 강의 노트가 없습니다.');
                }

                setNotes(response.data);
            } catch (error) {
                setError('강의 노트 조회 중 오류 발생');
                console.log('error 상세: ', error.response);
            }
        };

        if(courseId) {
            fetchNotes();
        }
    }, [courseId]);

    return { notes, error };
}

export default useNotes;