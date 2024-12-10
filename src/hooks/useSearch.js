import api from '../api/axios';
import { useState, useEffect, useCallback } from 'react';

function useSearch(initialSearchParams = null) {
    const [searchParams, setSearchParams] = useState(initialSearchParams || {
        gradeAndSemester: '',
        title: '',
        professorName: ''
    });

    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchUpdate = useCallback((type, value) => {
        setSearchParams(prev => ({
            ...prev, 
            [type]: value
        }));
    }, []);

    const handleSearch = useCallback(() => {
        const isAllEmpty = Object.values(searchParams).every(value => !value.trim());
        if(isAllEmpty) {
            alert('검색 조건을 입력하세요');
            return false;
        }
        setIsSearching(true); 
        return searchParams;
    }, [searchParams]);

    const fetchResults = useCallback(async (params) => {
        if (!params || Object.keys(params).length === 0) return;

        try {
            let grade, semester;
            if (params?.gradeAndSemester) {
                const match = params.gradeAndSemester.match(/(\d+)학년\s*(\d+)학기/);
                if (match) {
                    [, grade, semester] = match;
                } 
            }

            const searchParams = {
                ...(grade && {grade: parseInt(grade)}),
                ...(semester && {semester: parseInt(semester)}),
                ...(params.title && {title: params.title.trim()}),
                ...(params.professorName && {professorName: params.professorName.trim()})
            };

            const queryString = new URLSearchParams(searchParams).toString();

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('인증 토큰이 없습니다.');
            }

            const controller = new AbortController();
            const response = await api.get('/api/courses', { 
                params: searchParams,
                signal: controller.signal
            });
            
            setSearchResults(response.data?.length > 0 ? response.data : []);
            setError(null);

            return () => controller.abort();
        } catch (error) {
            console.error('API 에러 상세:', {
                name: error.name,
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
                config: error.config
            });
            setError(error.response?.data?.error || '검색 중 오류 발생');
            setSearchResults([]);
        } finally {
            setIsSearching(false);
        }
    }, []);

    useEffect(() => {
        let isSubscribed = true;
        
        if (initialSearchParams && Object.keys(initialSearchParams).length > 0) {
            const timeoutId = setTimeout(() => {
                if (isSubscribed) {
                    setIsSearching(true);
                    fetchResults(initialSearchParams);
                }
            }, 300);

            return () => {
                isSubscribed = false;
                clearTimeout(timeoutId);
            };
        }
    }, [initialSearchParams, fetchResults]);

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