// components/search/SearchResults.js - Only UI Rendering

import React from 'react';

function SearchResults({ results, error }) {
    if (error) {
        return <div className="text-red-500">{error}</div>;
    }
    // 구체화 필요
    if (!results || results.length === 0) {
        return <div>검색 결과가 없습니다. 다른 검색어로 시도해보세요.</div>;
    }
    // lecture - courses .. ? 
    return (
        <div className="space-y-4">
            {results.map((courses) => (
                <div 
                    key={courses.id} 
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <h3 className="text-lg font-semibold">{courses.title}</h3>
                    <p className="text-gray-600">
                        {courses.gradeAndSemester} | {courses.professorName}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;