// noinspection JSUnresolvedReference

import React, {useEffect, useState} from "react";
import "./MypageDownload.css";
import useAllNotes from "../hooks/useAllNotes"; // API 호출

export default function MypageDownload({user}) {
    const [downloadedNotes, setDownloadedNotes] = useState([]);
    const { notes, error: notesError } = useAllNotes(); // 노트 데이터

    useEffect(() => {
        if (user && notes.length > 0) {
            // 유저가 작성한 노트 필터링
            const filteredNotes = notes.filter((note) => user.accessibleNoteIDs.includes(note.id));
            setDownloadedNotes(filteredNotes);
        }
    }, [user, notes]);

    if (!notes) {
        return <p>로딩 중...</p>; // 로딩 메시지
    }

    if (notesError) {
        return <p>데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.</p>; // 에러 메시지
    }

    return (
        <div className="mypageDownload">
            {downloadedNotes.map((note) => (
                <div key={note.id} className="mypageDownload-container">
                    <div className="mypageDownload-container-info">
                        <div className="mypageDownload-container-course">{note.title}</div>
                        <div className="mypageDownload-container-details">
                            {note.uploaderName}<br/>
                            {note.uploadDate}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}