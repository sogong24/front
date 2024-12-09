import { useEffect, useState } from "react";
import api from "../api/axios";

function useUser() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/api/users/me");
                setUser(response.data);
            } catch (error) {
                setError("유저 정보를 가져오는 데 실패했습니다.");
                console.error(error.response);
            }
        };

        fetchUser();
    }, []);

    return { user, error };
}

export default useUser;
