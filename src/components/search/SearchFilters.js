// searchParams 관련 설정

import React from 'react';
import SearchBar from './SearchBar';

// props로 searchParams와 handleSearch를 받도록 수정
function SearchFilters({ searchParams, onSearch }) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-gray-700">학년&학기</span>
                <SearchBar 
                    placeholder="ex)1학년 2학기"
                    value={searchParams.gradeAndSemester}
                    onChange={(value) => onSearch('gradeAndSemester', value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-gray-700">강의명</span>
                <SearchBar
                    placeholder="ex) C언어및실습"
                    value={searchParams.title}
                    onChange={(value) => onSearch('title', value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-gray-700">교수명</span>
                <SearchBar
                    placeholder="ex) 김성환"
                    value={searchParams.professorName}
                    onChange={(value) => onSearch('professorName', value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}

export default SearchFilters;