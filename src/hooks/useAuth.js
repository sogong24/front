import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function useAuth() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // DB 연동 전 로그인 체크---------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("token") === "true";
  });
  //--------------------------------------------------------
  const navigate = useNavigate();
  const location = useLocation();

  const noBarPaths = ["/login", "/signup"];

  const login = async (email, password) => {
    console.log("로그인 함수 실행");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      setIsLoggedIn(true);
      console.log("토큰 : ", token);
      localStorage.setItem("token", token);
      // DB 연동 전 로그인 체크---------------------------------
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      console.log("로그인 성공");
      alert("로그인에 성공했습니다.");
      navigate("/home");
    } catch (error) {
      console.error(
        "로그인 실패:",
        error.response?.data?.error || error.message
      );
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    // localStorage - DB 연동 전 삭제 ; 임시 로직
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // DB 연동 전 로그인 체크
  const checkAuth = () => {
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
    if (!isAuthenticated && location.pathname !== "/login") {
      return false;
    }
    return true;
  };

  return { isLoggedIn, login, logout, checkAuth, noBarPaths };
}

export default useAuth;
