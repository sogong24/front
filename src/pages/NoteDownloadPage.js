// CourseBoradPage에서 강의 선택했을 때 다운받을 pdf를 보여주는 페이지
// searchFrame X 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useNoteDownload from '../hooks/useNoteDownload';
import axios from '../api/axios';

function NoteDownloadPage() {
    const { noteId } = useParams();
    const { downloadNote, error } = useNoteDownload();
    const [noteInfo, setNoteInfo] = useState({
        title: '',
        description: '',
        courseTitle: '',
        professorName: '',
        grade: '',
        semester: '',
        authorName: '',
        uploadDate: ''
    });
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchNoteInfo = async () => {
            try {
                setFetchError(null);
                const token = localStorage.getItem('token');

                if(!token) {
                    setFetchError('로그인이 필요합니다.');
                    return;
                }


                const response = await axios.get(`/api/notes/detail/${noteId}`, {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                });
                console.log('API Response: ',response);
                setNoteInfo(response.data);
            } catch (err) {
                console.error('노트 정보 조회 실패:');
                setFetchError(err.response?.data?.message || '노트 정보를 불러오지 못했습니다.');
            } 
        };

        fetchNoteInfo();
    }, [noteId]);

    return (
        <div className="flex my-4 bg-transparent justify-center items-center">
            <div className="px-[130px] bg-transparent rounded-xl space-y-6">
                {/* 노트 기본 정보 */}
                <div className="flex justify-between">
                    <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center mr-5 justify-between p-4">
                        <span className="pl-4 font-semibold flex-none">학년: </span>
                        <span className="pl-3">{noteInfo.grade}</span>
                    </div>
                    <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center p-4">
                        <span className="pl-3 font-semibold flex-none">학기: </span>
                        <span className="pl-4">{noteInfo.semester}</span>
                    </div>
                </div>

                {/* 강의명 */}
                <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center p-4">
                    <span className="pl-3 flex-none font-semibold">강의명: </span>
                    <span className="pl-4">{noteInfo.courseTitle}</span>
                </div>

                {/* 교수명 */}
                <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center p-4">
                    <span className="pl-3 flex-none font-semibold">교수명: </span>
                    <span className="pl-4">{noteInfo.professorName}</span>
                </div>

                {/* 작성자 및 업로드 날짜 */}
                <div className="flex justify-between">
                    <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center mr-5 p-4">
                        <span className="pl-3 flex-none font-semibold">작성자: </span>
                        <span className="pl-4">{noteInfo.authorName}</span>
                    </div>
                    <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center p-4">
                        <span className="pl-3 flex-none font-semibold">업로드 날짜: </span>
                        <span className="pl-4">{new Date(noteInfo.uploadDate).toLocaleDateString()}</span>
                    </div>
                </div>

                {/* 설명 */}
                <div className="w-full">
                    <div className="w-full bg-search-filter-color h-[120px] mt-4 rounded-xl p-3">
                        {noteInfo.description}
                    </div>
                </div>

                {/* 다운로드 버튼 */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => downloadNote(noteId)}
                        className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors"
                    >
                        다운로드
                    </button>
                </div>

                {/* 에러 메시지 */}
                {error && (
                    <div className="text-red-500 text-center mt-4">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NoteDownloadPage;