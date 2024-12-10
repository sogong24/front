import { useState } from "react";
import api from "../api/axios";

function useCountNoteLike() {
  //const [likeCount, setLikesCount] = useState(0);
  //const [dislikeCount, setDislikesCount] = useState(0);

  const [error, setError] = useState(null);

  const likeNote = async (noteID) => {
    try {
      setError(null);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("로그인이 필요합니다.");
        return null;
      }

      const response = await api.post(
        `/api/notes/${noteID}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const res = response.data;
      console.log("like 응답 결과: ", res);

      alert("추천하였습니다.");
      return res;
    } catch (err) {
      console.error("like 응답 실패: ", err);
      console.error("에러 응답:", err.response?.data); // 에러 응답 확인
      console.error("상태 코드:", err.response?.status);

      alert(err.response?.data?.error || "추천에 실패하였습니다.");
      return null;
    }
  };

  const dislikeNote = async (noteID) => {
    try {
      setError(null);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("로그인이 필요합니다.");
        return null;
      }

      const response = await api.post(`/api/notes/${noteID}/dislike`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = response.data;
      console.log("dislike 응답 결과: ", res);

      alert("비추천하였습니다.");
      return res;
    } catch (err) {
      console.error("dislike 응답 실패: ", err);
      console.error("에러 응답:", err.response?.data); // 에러 응답 확인
      console.error("상태 코드:", err.response?.status);
      alert(err.response?.data?.error || "비추천에 실패하였습니다.");
      return null;
    }
  };

  return { likeNote, dislikeNote };
}

export default useCountNoteLike;
