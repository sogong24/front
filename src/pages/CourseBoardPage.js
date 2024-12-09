// selected course at SearchResultPage -> Able to Download PDF List
// layout만 우선 구현하고 기능은 나중에 hooks에다가 구현

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchFrame from '../components/common/SearchFrame';
import useNotes from '../hooks/useNotes';

function CourseBoardPage() {

    const navigate = useNavigate();
    const { courseId } = useParams();
    const { notes, error } = useNotes(courseId);

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
                                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    onClick={() => navigate(`/notedownload/${note.id}`)}
                                >
                                    <h3 className="text-lg font-semibold">{note.title}</h3>
                                    <p className="text-gray-600">{note.description}</p>
                                    <div className="mt-2 text-sm text-gray-500">
                                        <span className="ml-2">Like: {note.likesCount}</span>
                                        <span className="ml-2">DisLike: {note.dislikesCount}</span>
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