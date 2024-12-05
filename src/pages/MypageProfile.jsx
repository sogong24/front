import React from "react";
import "./MypageProfile.css";
import { BiLike, BiDislike } from "react-icons/bi";

export default function MypageProfile() {
    return (
        <div className="mypageprofile">
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">닉네임</div>
                <div className="mypageprofile-box">홍길동</div>
            </div>
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">ID (이메일)</div>
                <div className="mypageprofile-box">muyaho1111@uos.ac.kr</div>
            </div>
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">평판 관리</div>
                <div className="mypageprofile-reputation">
                    <div className="reputation-box">
                        <BiLike className="icon" />
                        <span>55</span>
                        <div className="reputation-label">좋아요 수</div>
                    </div>
                    <div className="reputation-box">
                        <BiDislike className="icon" />
                        <span>2</span>
                        <div className="reputation-label">싫어요 수</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
