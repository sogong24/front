import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import SearchResults from '../components/search/SearchResults';
import useSearch from '../hooks/useSearch';


function SearchResultPage() {
    const location = useLocation();
    const searchParams = Object.fromEntries(new URLSearchParams(location.search));
    const { searchResults, error, searchTitles } = useSearch();

    useEffect(() => {
        if(Object.keys(searchParams).length > 0) {
            console.log('SearchResultPage - searchParams:', searchParams);
            searchTitles(searchParams);
        }
    }, [searchParams, searchTitles]);

    return (
        <div className="min-h-screen">
            <div className="p-4">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">검색 결과</h1>
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