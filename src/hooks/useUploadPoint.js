import { useState } from 'react';
import api from '../api/axios';

function useUploadPoint() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const addUploadPoint = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.post(`/api/users/points/add-upload`);
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
