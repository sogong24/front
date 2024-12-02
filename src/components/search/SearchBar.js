import React from 'react';

// search bar는 3개로 구성된다. 
// 1. 학년&학기 checkbox, input? 
// 2. 강의명 
// 3. 교수명 

function SearchBar({ value, onChange, ...props }) {
    return (
        <input 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
        />
    );
}

export default SearchBar;