import api from '../api/axios';
import { useState, useEffect } from 'react';

function useSearch(initialSearchParams = null) {
    const [searchParams, setSearchParams] = useState(initialSearchParams || {
        gradeAndSemester: '',
        title: '',
        professorName: ''
    });

    const[searchResults, setSearchResults] = useState([]);
    const[error, setError] = useState(null);

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
        return searchParams; // 검색 파라미터 반환
    };

    // 검색 결과 조회
    useEffect(() => {
        const fetchResults = async () => {
            try {
                console.log('API 요청 파라미터:', initialSearchParams);

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
                console.log('API 응답 결과: ', response.data);
                
                if(response.data && response.data.length > 0) {
                    console.log(`${response.data.length}개의 검색 결과 존재`);
                    setSearchResults(response.data);
                } else {
                    console.log('검색 결과 없음');
                    setSearchResults([]);
                }
                setError(null);
                } catch(error) {
                    console.error('API 오류: ', error);
                    setError('검색 중 오류 발생');
                    setSearchResults([]);
                }
            };
 
        // 검색 결과 존재할 때
        if(initialSearchParams) {
            fetchResults();
        }
    }, []); // 의존성 배열을 비워서 최초 마운트 시에만 실행

    return {
        searchParams, 
        searchResults, 
        error, 
        handleSearchUpdate, 
        handleSearch
    };
}

export default useSearch;