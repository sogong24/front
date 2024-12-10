import React from "react";
import "./MypageProfile.css";
import {BiLike, BiDislike} from "react-icons/bi";

export default function MypageProfile({user}) {
    // 에러 처리
    if (!user) {
        return <p>유저 정보를 불러오는 중...</p>;
    }

    return (
        <div className="mypageprofile">
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">닉네임</div>
                <div className="mypageprofile-box">{user.username}</div>
            </div>
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">ID (이메일)</div>
                <div className="mypageprofile-box">{user.email}</div>
            </div>
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">포인트 수</div>
                <div className="mypageprofile-box">{user.point}</div>
            </div>
            <div className="mypageprofile-container">
                <div className="mypageprofile-label">평판 관리</div>
                <div className="mypageprofile-reputation">
                    <div className="reputation-box">
                        <BiLike className="icon"/>
                        <span>{user.likeCount}</span>
                        <div className="reputation-label">좋아요 수</div>
                    </div>
                    <div className="reputation-box">
                        <BiDislike className="icon"/>
                        <span>{user.dislikeCount}</span>
                        <div className="reputation-label">싫어요 수</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
