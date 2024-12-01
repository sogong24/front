// searchParams 관련 설정

import React from 'react';
import SearchBar from './SearchBar';

// props로 searchParams와 handleSearch를 받도록 수정
function SearchFilters({ searchParams, onSearch }) {
    return (
        <div className="space-y-4">
            <SearchBar 
                label="학년&학기"
                placeholder="ex)1학년 1학기"
                value={searchParams.gradeAndSemester}
                onChange={(value) => onSearch('gradeAndSemester', value)}
            />
            <SearchBar
                label="강의명"
                placeholder="ex) C언어및실습"
                value={searchParams.title}
                onChange={(value) => onSearch('title', value)}
            />
            <SearchBar
                label="교수명"
                placeholder="ex) 김성환"
                value={searchParams.professorName}
                onChange={(value) => onSearch('professorName', value)}
            />
        </div>
    );
}

export default SearchFilters;