import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Menubar from './Menubar';
import SettingBar from './SettingBar';
import useAuth from '../../hooks/useAuth';

function Layout({children}) {
    const location = useLocation();
    const { checkAuth, noBarPaths } = useAuth();  // isLoggedIn 제거
    
    if (!checkAuth() && location.pathname !== '/login') {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50">
                <div className="sticky top-0 bg-white z-10">
                    {!noBarPaths.includes(location.pathname) && <SettingBar />}
                </div>
                {children}
                {!noBarPaths.includes(location.pathname) && <Menubar />}
            </div>
        </div>
  );
}

export default Layout;