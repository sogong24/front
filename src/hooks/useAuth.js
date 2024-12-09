import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function useAuth() {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("token") === "true";
  });

  const navigate = useNavigate();
  const location = useLocation();

  const noBarPaths = ["/login", "/signup"];

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      const { token, userInfo } = response.data;
      setIsLoggedIn(true);
      console.log("토큰 : ", token);
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");
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
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

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
