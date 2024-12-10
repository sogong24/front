import { useState } from 'react';
import axios from '../api/axios';

function usePoints() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // 다운로드를 위한 포인트 확인 및 차감
    const checkAndDeductPoint = async (noteId) => {
        try {
            setLoading(true);
            setError(null);
            const token = localStorage.getItem('token');

            if (!token) {
                setError('로그인이 필요합니다.');
                return false;
            }

            const response = await axios.post(`/api/users/points/check-download/${noteID}`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // 이미 다운로드한 노트인 경우에도 true 반환
            if (response.data.message === '이미 다운로드한 노트입니다.') {
                return true;
            }

            return true;
        } catch (err) {
            if (err.response?.status === 402) {
                setError('포인트가 부족합니다.');
            } else {
                setError('포인트 차감에 실패했습니다.');
            }
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { checkAndDeductPoint, error, loading };
}

export default usePoints;
