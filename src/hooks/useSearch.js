import { useState } from 'react';
import api from '../api/axios';

const useSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const searchTitles = async (searchParams) => {
        try {
            setError(null);
            console.log('검색 파라미터:', searchParams);

            const queryParams = {
                gradeAndSemester: searchParams.gradeAndSemester || null,
                title: searchParams.title || null,
                professorName: searchParams.professorName || null
            };

            console.log('API 요청 파라미터:', queryParams);
            const response = await api.get('/lectures/search', { params: queryParams });
            console.log('API 응답:', response.data);
            
            setSearchResults(response.data);

            if (response.data && response.data.length > 0) {
                alert(`${response.data.length}개의 검색 결과가 있습니다.`);
            } else {
                alert('검색 결과가 없습니다.');
            }

        } catch (error) {
            console.error('검색 에러:', error);
            setError('검색 중 오류가 발생했습니다.');
            alert('검색 중 오류가 발생했습니다.');
        }
    };

    return { searchResults, error, searchTitles };
};

export default useSearch;

