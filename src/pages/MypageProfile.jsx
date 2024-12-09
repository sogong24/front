import React, { useState, useEffect } from "react";
import "./MypageProfile.css";
import { BiLike, BiDislike } from "react-icons/bi";
import useAllNotes from "../hooks/useAllNotes"; // 모든 노트 정보 훅

export default function MypageProfile({ user }) {
    const { notes, error: notesError } = useAllNotes(); // 모든 노트 데이터 가져오기
    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);

    useEffect(() => {
        if (user && notes.length > 0) {
            // 유저가 업로드한 노트를 필터링
            const userNotes = notes.filter((note) => note.uploaderID === user.id);

            // 좋아요/싫어요 합산 계산
            const totalLikes = userNotes.reduce((sum, note) => sum + (note.likesCount || 0), 0);
            const totalDislikes = userNotes.reduce((sum, note) => sum + (note.dislikesCount || 0), 0);

            setLikesCount(totalLikes);
            setDislikesCount(totalDislikes);
        }
    }, [user, notes]);

    // 에러 처리
    if (!user) {
        return <p>유저 정보를 불러오는 중...</p>;
    }

    if (notesError) {
        return <p>노트 데이터를 불러오는 데 실패했습니다.</p>;
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
                <div className="mypageprofile-label">평판 관리</div>
                <div className="mypageprofile-reputation">
                    <div className="reputation-box">
                        <BiLike className="icon" />
                        <span>{likesCount}</span>
                        <div className="reputation-label">좋아요 수</div>
                    </div>
                    <div className="reputation-box">
                        <BiDislike className="icon" />
                        <span>{dislikesCount}</span>
                        <div className="reputation-label">싫어요 수</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
