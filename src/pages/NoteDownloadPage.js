// CourseBoradPage에서 강의 선택했을 때 다운받을 pdf를 보여주는 페이지
// searchFrame X 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useNoteDetail from '../hooks/useNoteDetail';
import useNoteDownload from '../hooks/useNoteDownload';

function NoteDownloadPage() {
    // const { noteID } = useParams();
    // const { noteInfo, error: detailError, loading: detailLoading, getNoteDetail } = useNoteDetail();
    // const { downloadNote, error: downloadError, loading: downloadLoading } = useNoteDownload();

    // useEffect(() => {
    //     getNoteDetail(noteID);
    // }, [noteID]);

    // const handleDownload = async () => {
    //     await downloadNote(noteID);
    // };

    // if (detailLoading) {
    //     return <div className="text-center mt-8">로딩 중...</div>;
    // }

    // if (detailError) {
    //     return <div className="text-red-500 text-center mt-8">{detailError}</div>;
    // }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* {noteInfo && ( */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* <h1 className="text-2xl font-bold mb-4">{noteInfo.title}</h1> */}
                    <h1 className="text-2xl font-bold mb-4">노트 다운로드</h1>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-gray-600">강의명</p>
                            {/* <p className="font-semibold">{noteInfo.courseTitle}</p> */}
                            <p className="font-semibold">C언어및실습</p>
                        </div>
                        <div>
                            <p className="text-gray-600">교수명</p>
                            {/* <p className="font-semibold">{noteInfo.professorName}</p> */}
                            <p className="font-semibold">김성환</p>
                        </div>
                        <div>
                            <p className="text-gray-600">학년/학기</p>
                            {/* <p className="font-semibold">{noteInfo.grade}학년 {noteInfo.semester}학기</p> */}
                            <p className="font-semibold">1학년 2학기</p>
                        </div>
                        <div>
                            <p className="text-gray-600">작성자</p>
                            <p className="font-semibold">oyc</p>
                        </div>
                    </div>

                    {/* <div className="mb-6">
                        <p className="text-gray-600">설명</p>
                        <p className="mt-2">{noteInfo.description}</p>
                    </div> */}

                    <div className="text-gray-500 text-sm mb-6">
                        업로드 날짜: {new Date().toLocaleDateString()}
                    </div>

                    <div className="flex justify-center">
                        <button>다운로드</button>
                            {/* // onClick={handleDownload}
                            // disabled={downloadLoading}
                        //     className={`px-6 py-2 rounded-xl transition-colors ${ */}
                        {/* //         downloadLoading 
                        //             ? 'bg-gray-400 cursor-not-allowed' 
                        //             : 'bg-blue-500 hover:bg-blue-600'
                        //     } text-white`}
                        // > */}
                        {/* {downloadLoading ? '다운로드 중...' : '다운로드'} */}
                        {/* // </button> */}
                    </div>

                    {/* {downloadError && (
                        <div className="text-red-500 text-center mt-4">
                            {downloadError}
                        </div>
                    )} */}
                </div>
            {/* )} */}
        </div>
    );
}

export default NoteDownloadPage;