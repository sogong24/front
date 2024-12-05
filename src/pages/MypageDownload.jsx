import React from "react";
import "./MypageDownload.css";
import { GoDownload } from "react-icons/go";

export default function MypageDownload() {
    const downloadList = [
        { id: 1, course: "소프트웨어 공학", professor: "정지은", semester: "2024학년도 1학기" },
        { id: 2, course: "콘창실", professor: "김성환", semester: "2024학년도 1학기" },
        { id: 3, course: "수치해석", professor: "김민호", semester: "2024학년도 1학기" },
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
                    <GoDownload className="download-icon" />
                </div>
            ))}
        </div>
    );
}
