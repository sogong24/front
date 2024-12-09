import React from "react";
import { useState } from "react";
import useUser from "../hooks/useUser"; // 사용자 정보 훅
import MypageProfile from "./MypageProfile";
import MypageDownload from "./MypageDownload";
import MypageWrite from "./MypageWrite";

function Mypage() {
    const { user, error } = useUser(); // 사용자 데이터 가져오기
    const [currentComponent, setCurrentComponent] = useState("profile");

    // 에러 처리
    if (error) {
        return <p>{error}</p>;
    }

    // 로딩 상태 처리
    if (!user) {
        return <p>유저 정보를 불러오는 중...</p>;
    }

    // 하위 컴포넌트를 렌더링하는 함수
    const renderComponent = () => {
        switch (currentComponent) {
            case "profile":
                return <MypageProfile user={user} />;
            case "download":
                return <MypageDownload user={user} />;
            case "write":
                return <MypageWrite user={user} />;
            default:
                return <MypageProfile user={user} />;
        }
    };

    return (
        <div className="mypage-css">
            <div className="menu">
                <div onClick={() => setCurrentComponent("profile")}>프로필</div>
                <div onClick={() => setCurrentComponent("download")}>다운받은 목록</div>
                <div onClick={() => setCurrentComponent("write")}>작성한 목록</div>
            </div>
            <div className="content">{renderComponent()}</div>
        </div>
    );
}

export default Mypage;
