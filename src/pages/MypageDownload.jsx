import React from "react";
import "./MypageDownload.css";
import { GoDownload } from "react-icons/go";


export default function MypageDownload() {
    return (
        <div className="mypageDownload">
            <div className="mypageDownload-container">1
                <div className="mypageDownload-container-inf">소프트웨어 공학</div><GoDownload /></div>
            <div className="mypageDownload-container">2<GoDownload /></div>
            <div className="mypageDownload-container">3<GoDownload /></div>
        </div>
    );
}