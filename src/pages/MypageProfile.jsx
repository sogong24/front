import React, { useState, useEffect } from "react";
import "./MypageProfile.css";
import { BiLike, BiDislike } from "react-icons/bi";
import useUser from "../hooks/useUser"; // 유저 정보
import useAllNotes from "../hooks/useAllNotes"; // 모든 노트 정보

export default function MypageProfile() {
    const { user, error: userError, loading: userLoading } = useUser(); // 유저 데이터
    const { notes, error: notesError } = useAllNotes(); // 모든 노트 데이터
    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);

    useEffect(() => {
        if (user && notes.length > 0) {
            // 유저가 업로드한 노트를 필터링
            const userNotes = notes.filter((note) => note.uploaderID === user.id);

            // 좋아요/싫어요 합산
            const totalLikes = userNotes.reduce((sum, note) => sum + note.likesCount, 0);
            const totalDislikes = userNotes.reduce((sum, note) => sum + note.dislikesCount, 0);

            setLikesCount(totalLikes);
            setDislikesCount(totalDislikes);
        }
    }, [user, notes]);

    if (userLoading) {
        return <p>프로필 정보를 불러오는 중...</p>; // 유저 로딩 중
    }

    if (userError || notesError) {
        return <p>데이터를 불러오는 데 실패했습니다.</p>; // 에러 처리
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
