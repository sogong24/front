import React from 'react';
import SearchBar from '../search/SearchBar';

function SearchFrame() {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-100 bg-poacity-75 flex justify-center items-center'>
            <div className='bg-white p-4 rounded shadow-lg w-[600px]'>
                <h2 className='text-lg font-bold mb-6'>검색</h2>
                <div className='space-y-4'>
                    <SearchBar searchType='semester' label='학년&학기' />
                    <SearchBar searchType='course' label='강의명'/>
                    <SearchBar searchType='professor' label='교수명'/>
                </div>
            </div>
        </div>
    );
}

export default SearchFrame;