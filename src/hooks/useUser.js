import {useState} from "react";
import api from "../api/axios";

function useUser() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const getUserDetail = async () => {
        try {
            const response = await api.get("/api/users/me");
            const data = await response.data;
            console.log(data);
            setUser(data);
        } catch (error) {
            setError("유저 정보를 가져오는 데 실패했습니다.");
            console.error(error.response);
        }
    }
    return {user, error, getUserDetail};
}

export default useUser;
