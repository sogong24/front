import { useEffect, useState } from "react";
import api from "../api/axios";

function useAllNotes() {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                // 모든 노트를 가져오는 API 요청
                const response = await api.get(`/api/allnotes`);
                setNotes(response.data);
            } catch (error) {
                setError("노트 데이터를 가져오는 데 실패했습니다.");
                console.error("노트 데이터 오류:", error.response);
            }
        };

        fetchNotes();
    }, []);

    return { notes, error };
}

export default useAllNotes;
