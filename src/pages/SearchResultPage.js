// pages/SearchResultPage.js - 페이지 구성만 담당

import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchFrame from '../components/common/SearchFrame';
import SearchResults from '../components/search/SearchResults';
import useSearch from '../hooks/useSearch';

function SearchResultPage() {
    const location = useLocation();
    const searchParams = Object.fromEntries(new URLSearchParams(location.search));
    
    // 디버깅 추가
    console.log('URL search:', location.search);
    console.log('Parsed searchParams:', searchParams);
    console.log('searchParams is empty?:', Object.keys(searchParams).length === 0);

    const { searchResults, error } = useSearch(searchParams);
    
    console.log('검색 결과:', searchResults); // 검색 결과 로깅 추가

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* 검색 섹션 */}
                <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                    <SearchFrame initialSearchParams={searchParams} />
                </div>

                {/* 검색 결과 섹션 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            검색 결과
                        </h2>
                        {searchParams.title && (
                            <p className="text-gray-600 mt-2">
                                "{searchParams.gradeAndSemester}-{searchParams.title}-{searchParams.professorName}" 검색 결과입니다
                            </p>
                        )}
                    </div>
                    
                    {/* 검색 결과 컴포넌트 */}
                    <SearchResults
                        results={searchResults}
                        error={error}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchResultPage;