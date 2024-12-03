import React from "react";
import "./Mypage.css";
import { useState } from "react";
import MypageDownload from './MypageDownload';
import MypageProfile from './MypageProfile';
import MypageWrite from './MypageWrite';

function Mypage() {

    const [currentComponent, setCurrentComponent] = useState('profile');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'profile':
                return <MypageProfile />;
            case 'download':
                return <MypageDownload />;
            case 'write':
                return <MypageWrite />;
            default:
                return <MypageProfile />;
        }
    };
    return (
        <div className="Mypage">
            <div className="profile"><img alt="profile"/></div>
            <div className="menu">
                <div className="menu-button btn-16" onClick={() => setCurrentComponent('profile')}>프로필</div>
                <div className="menu-button btn-16" onClick={() => setCurrentComponent('download')}>다운받은목록</div>
                <div className="menu-button btn-16" onClick={() => setCurrentComponent('write')}>작성한목록</div>
            </div>
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
}

export default Mypage;