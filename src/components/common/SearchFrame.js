import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilters from '../search/SearchFilters';
import useSearch from '../../hooks/useSearch';

function SearchFrame({ initialSearchParams = null }) {

    const navigate = useNavigate();
    const { searchParams, handleSearchUpdate, handleSearch } = useSearch(initialSearchParams);

    const handleSearchSubmit = () => {
        const params = handleSearch();
        if (params) {
            const queryString = new URLSearchParams(params).toString();
            navigate(`/search?${queryString}`, { replace: true });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <SearchFilters 
                searchParams={searchParams}
                // onChange event → onSearch
                onSearch={handleSearchUpdate} 
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

export default SearchFrame;
