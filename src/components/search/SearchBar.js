import React from 'react';

// search bar는 3개로 구성된다. 
// 1. 학년&학기 checkbox, input? 
// 2. 강의명 
// 3. 교수명 

function SearchBar( { label, placeholder, value, onChange }) {
    // searchType 삭제 -> 나중에 dropdown 추가 예정
    // const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='flex items-center space-x-4 w-full'>
            {/* <label className='flex items-center space-x-2'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className='w-4 h-4'
                />
                <span className='min-w-[80px]'>{label}</span>
            </label> */}
            <label className='flex items-center w-full'>
                <span className='min-w-[80px]'>{label}</span>
            <input 
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className='flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                />
            </label>
        </div>
    );
}

export default SearchBar;