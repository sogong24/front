// selected course at SearchResultPage -> Able to Download PDF List
// layout만 우선 구현하고 기능은 나중에 hooks에다가 구현

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchFrame from '../components/common/SearchFrame';
import useNotes from '../hooks/useNotes';
import useNoteDownload from '../hooks/useNoteDownload';

function CourseBoardPage() {

    const navigate = useNavigate();
    const { courseId } = useParams();
    const { notes, error } = useNotes(courseId);
    const { downloadNote, error: downloadError, loading: downloadLoading } = useNoteDownload();

    const handleDownload = async (noteId, e) => {
        e.stopPropagation();  // 노트 상세 페이지로 이동하는 것을 방지
        const success = await downloadNote(noteId);
        if (!success && downloadError) {
            alert(downloadError);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* 검색 섹션 */}
                <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                    <SearchFrame />
                </div>

                {/* 강의 pdf list 섹션 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            강의 PDF 목록
                        </h2>
                    </div>

                    {error && <div className="text-red-500">{error}</div>}

                    {!error && (
                        <div className="space-y-4">
                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                                >
                                    <div 
                                        className="flex-1 cursor-pointer" 
                                        onClick={() => navigate(`/notedownload/${note.id}`)}
                                    >
                                        <h3 className="text-lg font-semibold">{note.title}</h3>
                                        <p className="text-gray-600">{note.description}</p>
                                        <div className="mt-2 text-sm text-gray-500">
                                            <span className="ml-2">Like: {note.likesCount}</span>
                                            <span className="ml-2">DisLike: {note.dislikesCount}</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <button
                                            onClick={(e) => handleDownload(note.id, e)}
                                            disabled={downloadLoading}
                                            className={`px-4 py-2 rounded-lg ${
                                                downloadLoading 
                                                    ? 'bg-gray-300 cursor-not-allowed' 
                                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                                            }`}
                                        >
                                            {downloadLoading ? '다운로드 중...' : '다운로드'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {notes.length === 0 && (
                                <div className="text-center text-gray-500">
                                    아직 업로드 된 노트가 없습니다.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

    

}

export default CourseBoardPage;