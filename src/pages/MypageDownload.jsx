// import React, { useEffect, useState } from "react";
// import "./MypageDownload.css";
// import useUser from "../hooks/useUser"; // 유저 정보
// import api from "../api/axios"; // API 호출

// export default function MypageDownload({user}) {
//     const [downloadedNotes, setDownloadedNotes] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchDownloadedNotes = async () => {
//             if (!user) return;

//             try {
//                 const noteRequests = user.accessibleNoteIDs.map((noteID) =>
//                     api.get(`/api/notes/${noteID}`)
//                 );
//                 const noteResponses = await Promise.all(noteRequests);

//                 const notes = noteResponses.map((response) => response.data);
//                 setDownloadedNotes(notes);
//             } catch (err) {
//                 setError("다운로드한 노트 데이터를 가져오는 데 실패했습니다.");
//                 console.error(err);
//             }
//         };

//         fetchDownloadedNotes();
//     }, [user]);

//     return (
//         <div className="mypageDownload">
//             {downloadedNotes.map((note) => (
//                 <div key={note.id} className="mypageDownload-container">
//                     <div className="mypageDownload-container-info">
//                         <div className="mypageDownload-container-course">{note.title}</div>
//                         <div className="mypageDownload-container-details">
//                             {note.uploaderName} pf<br />
//                             {note.uploadDate}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
import React from "react";
import "./MypageDownload.css";
import { GoDownload } from "react-icons/go";

export default function MypageDownload() {
    const downloadList = [
        { id: 1, course: "C언어및실습", professor: "김성환", semester: "2024학년도 2학기" },
        // { id: 2, course: "콘창실", professor: "김성환", semester: "2024학년도 1학기" },
        // { id: 3, course: "수치해석", professor: "김민호", semester: "2024학년도 1학기" },
    ];

    return (
        <div className="mypageDownload">
            {downloadList.map((item) => (
                <div key={item.id} className="mypageDownload-container">
                    <div className="mypageDownload-container-info">
                        <div className="mypageDownload-container-course">{item.course}</div>
                        <div className="mypageDownload-container-details">
                            {item.professor} pf<br />
                            {item.semester}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
