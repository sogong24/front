import React from "react";
import "./MypageWrite.css";
import { TfiWrite } from "react-icons/tfi";

export default function MypageWrite() {
    const writeList = [
        { id: 1, course: "소프트웨어 공학", professor: "정지은", semester: "2024학년도 1학기" },
    ];

    return (
        <div className="mypageWrite">
            {writeList.map((item) => (
                <div key={item.id} className="mypageWrite-container">
                    <div className="mypageWrite-container-info">
                        <div className="mypageWrite-course">{item.course}</div>
                        <div className="mypageWrite-details">
                            {item.professor} pf<br />
                            {item.semester}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
