import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilters from '../components/search/SearchFilters';

function HomePage() {
    // const [testMessage, setTestMessage] = useState('');
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        gradeAndSemester: '',
        title: '',
        professorName: ''
    });

    const handleSearch = (type, value) => {
        setSearchParams(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleSearchSubmit = () => {
        // 모든 필드가 비어있는지 확인
        const isAllEmpty = Object.values(searchParams).every(value => !value.trim());
        
        if (isAllEmpty) {
            alert('검색어를 입력해주세요.');
            return;
        }

        const queryString = new URLSearchParams(searchParams).toString();
        navigate(`/search?${queryString}`, {
            state: { searchParams }
        });
    };

    // useEffect(() => {
    //     // backend test
    //     const testConnection = async () => {
    //         try {
    //             const response = await api.get('/');
    //             setTestMessage(response.data);
    //             console.log('backend test success', response.data);
    //         } catch (error) {
    //             console.error('backend test fail', error);
    //             setTestMessage('backend test fail');
    //         }
    //     }

    //     testConnection();
    // }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">강의 검색</h1>
            <SearchFilters 
                searchParams={searchParams}
                onSearch={handleSearch}
            />
            <button 
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                onClick={handleSearchSubmit}
            >
                검색
            </button>
        </div>
    );
}

export default HomePage;