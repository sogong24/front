import React from "react";
import "./MypageProfile.css";

export default function mypageprofile() {
    return (
        <div className="mypageprofile">
            <div className="mypageprofile-container">닉네임
                <div className="mypageprofile-box"></div>
            </div>
            <div className="mypageprofile-container">ID (이메일)
            <div className="mypageprofile-box"></div>
            </div>
            <div className="mypageprofile-container">평판 관리
            <div className="mypageprofile-box"></div>
            </div>
        </div>
    );
}