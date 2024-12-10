import React, { useEffect, useState } from "react";
import "./MypageDownload.css";
import useUser from "../hooks/useUser"; // 유저 정보
import api from "../api/axios"; // API 호출

export default function MypageDownload({user}) {
    const [downloadedNotes, setDownloadedNotes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDownloadedNotes = async () => {
            if (!user) return;

            try {
                const noteRequests = user.accessibleNoteIDs.map((noteID) =>
                    api.get(`/api/notes/${noteID}`)
                );
                const noteResponses = await Promise.all(noteRequests);

                const notes = noteResponses.map((response) => response.data);
                setDownloadedNotes(notes);
            } catch (err) {
                setError("다운로드한 노트 데이터를 가져오는 데 실패했습니다.");
                console.error(err);
            }
        };

        fetchDownloadedNotes();
    }, [user]);

    return (
        <div className="mypageDownload">
            {downloadedNotes.map((note) => (
                <div key={note.id} className="mypageDownload-container">
                    <div className="mypageDownload-container-info">
                        <div className="mypageDownload-container-course">{note.title}</div>
                        <div className="mypageDownload-container-details">
                            {note.uploaderName} pf<br />
                            {note.uploadDate}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}