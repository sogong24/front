import React, { useState } from 'react';

// search bar는 3개로 구성된다. 
// 1. 학년&학기 checkbox, input? 
// 2. 강의명 
// 3. 교수명 

function SearchBar( { searchType, label }) {
    const [value, setValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='flex items-center space-x-4'>
            <label className='flex items-center space-x-2'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className='w-4 h-4'
                />
                <span className='min-w-[80px]'>{label}</span>
            </label>
            <input 
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            />
        </div>
    );
}

export default SearchBar;