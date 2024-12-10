import { useState } from "react";
import api from "../api/axios";

function useNoteDetail() {
  const [noteInfo, setNoteInfo] = useState(null);
  const [error, setError] = useState(null);

  const getNoteDetail = async (noteID) => {
    try {
      const response = await api.get(`/api/notes/detail/${noteID}`);
      const data = await response.data;
      console.log("getnotedetail: ", data);
      setNoteInfo(data);
    } catch (err) {
      console.error("노트 정보 조회 실패:", err);
      console.error("에러 응답:", err.response?.data); // 에러 응답 확인
      console.error("상태 코드:", err.response?.status);
      setError(
        err.response?.data?.message || "노트 정보를 불러오지 못했습니다."
      );
    }
  };

  return { noteInfo, error, getNoteDetail };
}

export default useNoteDetail;
