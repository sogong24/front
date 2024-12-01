import React from "react";
import "./MypageProfile.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";


export default function mypageprofile() {
    return (
        <div className="mypageprofile">
            <div className="mypageprofile-container">닉네임
                <div className="mypageprofile-box">홍길동</div>
            </div>
            <div className="mypageprofile-container">ID (이메일)
            <div className="mypageprofile-box">muyaho12@uos.ac.kr</div>
            </div>
            <div className="mypageprofile-container">평판 관리
            <div className="mypageprofile-box-reputation">
                <div className="reputation">좋아요  55<BiLike /></div>
                <div className="reputation">싫어요  2<BiDislike />
                </div>
            </div>
            </div>
        </div>
    );
}