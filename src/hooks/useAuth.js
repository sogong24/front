import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function useAuth() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // DB 연동 전 로그인 체크---------------------------------
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    //--------------------------------------------------------
    const navigate = useNavigate();
    const location = useLocation();

    const noBarPaths = ['/login', '/signup'];

    const login = () => {
        console.log('로그인 함수 실행');
        setIsLoggedIn(true);
        // DB 연동 전 로그인 체크---------------------------------
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/home');
    };

    const logout = () => {
        setIsLoggedIn(false);
        // localStorage - DB 연동 전 삭제 ; 임시 로직
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    // DB 연동 전 로그인 체크
    const checkAuth = () => {
        const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
        if (!isAuthenticated && location.pathname !== '/login') {
            return false;
        }
        return true;
    };

    // DB 연동 후 사용할 로직
    // const checkAuth = () => {
    //     if(!isLoggedIn && !noBarPaths.includes(location.pathname)) {
    //         return false;
    //     }
    //     return true;
    // };

    return { isLoggedIn, login, logout, checkAuth, noBarPaths };
}

export default useAuth;