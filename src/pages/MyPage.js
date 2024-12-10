// import React from "react";
// import "./Mypage.css";
// import { useState } from "react";
// import MypageDownload from "./MypageDownload";
// import MypageProfile from "./MypageProfile";
// import MypageWrite from "./MypageWrite";
// import useUser from "../hooks/useUser";

// function Mypage() {
//     // Hooks는 최상위 레벨에서 호출
//     const { user, error } = useUser();
//     const [currentComponent, setCurrentComponent] = useState("profile");

//     // 에러 또는 로딩 상태에 따라 조건부 렌더링
//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!user) {
//         return <p>유저 정보를 불러오는 중...</p>;
//     }

//     const renderComponent = () => {
//         switch (currentComponent) {
//             case "profile":
//                 return <MypageProfile />;
//             case "download":
//                 return <MypageDownload />;
//             case "write":
//                 return <MypageWrite />;
//             default:
//                 return <MypageProfile />;
//         }
//     };

//     return (
//         <div className="mypage-css">
//             <div className="profile"></div>
//             <div className="menu">
//                 <div className="menu-button" onClick={() => setCurrentComponent("profile")}>
//                     프로필
//                 </div>
//                 <div className="menu-button" onClick={() => setCurrentComponent("download")}>
//                     다운받은목록
//                 </div>
//                 <div className="menu-button" onClick={() => setCurrentComponent("write")}>
//                     작성한목록
//                 </div>
//             </div>
//             <div className="content">{renderComponent()}</div>
//         </div>
//     );
// }

// export default Mypage;
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
                <h2 className="profile-name">오유찬</h2>
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
