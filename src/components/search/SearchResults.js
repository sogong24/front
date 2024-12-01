import React, { useEffect, useState } from 'react';
import api from '../../api/axios';

function SearchResults({ results, error }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (results || error) {
            setLoading(false);
        }
    }, [results, error]);

    if (loading) {
        return <div>검색 중...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!results || results.length === 0) {
        return <div>검색 결과가 없습니다. 다른 검색어로 시도해보세요.</div>;
    }

    return (
        <div className="space-y-4">
            {results.map((lecture) => (
                <div 
                    key={lecture.id} 
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <h3 className="text-lg font-semibold">{lecture.title}</h3>
                    <p className="text-gray-600">
                        {lecture.gradeAndSemester} | {lecture.professorName}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;