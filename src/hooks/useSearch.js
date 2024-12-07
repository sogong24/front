import api from '../api/axios';
import { useState, useEffect } from 'react';

function useSearch(initialSearchParams = null) {
    // 디버깅 로그 추가

    const [searchParams, setSearchParams] = useState(initialSearchParams || {
        gradeAndSemester: '',
        title: '',
        professorName: ''
    });

    const[searchResults, setSearchResults] = useState([]);
    const[error, setError] = useState(null);
    // 파라미터 지속적인 송신 방지
    // 검색 중일 때는 검색 버튼 비활성화 
    const[isSearching, setIsSearching] = useState(false);

    // 검색어 입력 처리
    const handleSearchUpdate = (type, value) => {
        setSearchParams(prev => ({
            ...prev, 
            [type]: value
        }));
    };

    // 검색 버튼 클릭 처리
    const handleSearch = () => {
        const isAllEmpty = Object.values(searchParams).every(value => !value.trim());
        if(isAllEmpty) {
            alert('검색 조건을 입력하세요');
            return false;
        }
        setIsSearching(true); 
        return searchParams; // 검색 파라미터 반환
    };

    // 검색 결과 조회
    useEffect(() => {
        if (!initialSearchParams || Object.keys(initialSearchParams).length === 0) {
            return;
        }

        setIsSearching(true);
        
        const fetchResults = async () => {
            try {
                // gradeAndSemester 파싱
                let grade, semester;
                if (initialSearchParams?.gradeAndSemester) {
                    const match = initialSearchParams.gradeAndSemester.match(/(\d+)학년\s*(\d+)학기/);
                    if (match) {
                        [, grade, semester] = match;
                    } 
                }

                // 백엔드와 대조하는 파라미터
                const params = {
                    ...(grade && {grade}),
                    ...(semester && {semester}),
                    ...(initialSearchParams.title && {title: initialSearchParams.title }),
                    ...(initialSearchParams.professorName && {professorName: initialSearchParams.professorName })
                };


                const response = await api.get('/api/courses', { params }); 
                // console.log('API 응답 결과: ', response.data);
                
                if(response.data && response.data.length > 0) {
                    setSearchResults(response.data);
                } else {
                    setSearchResults([]);
                }
                setError(null);
            } catch(error) {
                setError('검색 중 오류 발생');
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        };

        fetchResults();
    }, [initialSearchParams]);

    return {
        searchParams, 
        searchResults, 
        error,
        isSearching,
        handleSearchUpdate, 
        handleSearch
    };
}

export default useSearch;

// api 요청이 지속적으로 발생하는 문제.