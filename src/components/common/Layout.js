import { useLocation } from "react-router-dom";
import Menubar from "./Menubar";
import SettingBar from "./SettingBar";
import HomePage from "../../pages/HomePage";
import Mypage from "../../pages/MyPage";
import PostCreatePage from "../../pages/PostCreatePage";
import Login from "../../pages/Login";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function Layout() {
  const location = useLocation();
  const noBarPaths = ["/login", "/signup"];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    console.log(isLoggedIn);
    if (!isLoggedIn && !noBarPaths.includes(location.pathname)) {
      return <Navigate to="/login" replace />;
    }

    switch (location.pathname) {
      case "/":
        return <HomePage />;
      case "/mypage":
        return <Mypage />;
      case "/post/create":
        return <PostCreatePage />;
      case "/login":
        return <Login setIsLoggedIn={setIsLoggedIn} />;
      default:
        return <Navigate to="/" replace />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50">
        <div className="sticky top-0 bg-white z-10">
          {!noBarPaths.includes(location.pathname) && <SettingBar />}
        </div>
        {renderPage()}
        {!noBarPaths.includes(location.pathname) && <Menubar />}
      </div>
    </div>
  );
}

export default Layout;