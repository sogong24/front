import { useState } from 'react';
import axios from '../api/axios';

function useUploadPoint() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const addUploadPoint = async () => {
        try {
            setLoading(true);
            setError(null);
            const token = localStorage.getItem('token');

            if (!token) {
                setError('로그인이 필요합니다.');
                return null;
            }

            const response = await axios.post('/api/users/points/add-upload', null, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            return response.data;
        } catch (err) {
            setError('포인트 추가에 실패했습니다.');
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { addUploadPoint, error, loading };
}

export default useUploadPoint;
