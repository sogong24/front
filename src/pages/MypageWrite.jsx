import React, { useEffect, useState } from "react";
import "./MypageWrite.css";
import useUser from "../hooks/useUser"; // 유저 정보 가져오기
import useAllNotes from "../hooks/useAllNotes"; // 모든 노트 가져오기

export default function MypageWrite({user}) {
    const { notes, error: notesError } = useAllNotes(); // 노트 데이터
    const [userNotes, setUserNotes] = useState([]); // 유저가 작성한 노트

    useEffect(() => {
        if (user && notes.length > 0) {
            // 유저가 작성한 노트 필터링
            const filteredNotes = notes.filter((note) => note.uploaderID === user.id);
            setUserNotes(filteredNotes);
        }
    }, [user, notes]);

    return (
        <div className="mypageWrite">
            {userNotes.length > 0 ? (
                userNotes.map((note) => (
                    <div key={note.id} className="mypageWrite-container">
                        <div className="mypageWrite-container-info">
                            <div className="mypageWrite-course">{note.title}</div>
                            <div className="mypageWrite-details">
                                {note.uploaderName || "알 수 없음"} pf<br />
                                {note.uploadDate}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>작성한 게시글이 없습니다.</p> // 작성한 게시글이 없을 때
            )}
        </div>
    );
}
