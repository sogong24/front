import { useEffect, useState } from "react";
import api from "../api/axios";

function useUser() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const payload = token.split('.')[1];
                    const decodedPayload = JSON.parse(atob(payload));
                    const userId = decodedPayload.userId;
                    console.log('Attempting to fetch user with ID:', userId);
                    
                    setLoading(true);
                    const response = await api.get(`/api/users/${userId}`);
                    console.log('User Response:', response.data);
                    setUser(response.data);
                    setError(null);
                } else {
                    setError("로그인이 필요합니다");
                }
            } catch (error) {
                console.error('Error details:', {
                    status: error.response?.status,
                    statusText: error.response?.statusText,
                    data: error.response?.data,
                    url: error.config?.url
                });
                setError("유저 정보를 가져오는 데 실패했습니다.");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, error, loading };
}

export default useUser;
