import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults.js';
import SearchFilters from '../components/search/SearchFilters.js';

function SearchPage() {
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>검색</h1>
            <div className='space-y-4'>
                {/* 검색 체크박스 - 학년&학기, 강의명, 교수명 */}
                {/* 입력 가능 + 체크박스 가능 */}
                <SearchBar />
                {/* <SearchFilters />
                <SearchResults /> */}
            </div>
        </div>
    );
}

export default SearchPage;