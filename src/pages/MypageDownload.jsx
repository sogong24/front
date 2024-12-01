import React from "react";
import "./MypageDownload.css";
import { GoDownload } from "react-icons/go";


export default function MypageDownload() {
    return (
        <div className="mypageDownload">
            <div className="mypageDownload-container">1  
                <div className="mypageDownload-container-inf">소프트웨어 공학 정지은 pf 2024학년도 2학기</div><GoDownload className="download-icons"/></div>
            <div className="mypageDownload-container">2<GoDownload className="download-icons"/></div>
            <div className="mypageDownload-container">3<GoDownload className="download-icons"/></div>
        </div>
    );
}