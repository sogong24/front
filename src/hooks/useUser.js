import {useState} from "react";
import api from "../api/axios";

function useUser() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const getUserDetail = async () => {
        try {
            setError(null);
            const token = localStorage.getItem('token');

            if (!token) {
                setError('로그인이 필요합니다.');
                return null;
            }

            const response = await api.get("/api/users/me", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(`token: ${token}`);
            console.log(response.data);

            const data = await response.data;
            setUser(data);
            return response.data;
        } catch (error) {
            setError("유저 정보를 가져오는 데 실패했습니다.");
            console.error(error.response);
        }
    }
    return {user, error, getUserDetail};
}

export default useUser;
