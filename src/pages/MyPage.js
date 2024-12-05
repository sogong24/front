import React, { useState } from "react";
import "./Mypage.css";
import MypageProfile from "./MypageProfile";
import MypageDownload from "./MypageDownload";
import MypageWrite from "./MypageWrite";

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
        <div className="mypage">
            <div className="profile">
                <img
                    className="profile-image"
                    src="https://via.placeholder.com/100" // 대체 이미지 경로
                    alt="profile"
                />
                <h2 className="profile-name">홍길동</h2>
            </div>
            <div className="menu">
                <button
                    className={`menu-button ${currentComponent === 'profile' ? 'active' : ''}`}
                    onClick={() => setCurrentComponent('profile')}
                >
                    프로필
                </button>
                <button
                    className={`menu-button ${currentComponent === 'download' ? 'active' : ''}`}
                    onClick={() => setCurrentComponent('download')}
                >
                    다운 받은 목록
                </button>
                <button
                    className={`menu-button ${currentComponent === 'write' ? 'active' : ''}`}
                    onClick={() => setCurrentComponent('write')}
                >
                    작성한 목록
                </button>
            </div>
            <div className="content">{renderComponent()}</div>
        </div>
    );
}

export default Mypage;
