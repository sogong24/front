import React from "react";
import SearchBar from "../search/SearchBar";

function SearchFrame() {
  return (
    <div className="flex-1 bg-white p-4">
      <div className="w-full h-full">
        <h2 className="text-lg font-bold mb-6">검색</h2>
        <div className="space-y-4">
          <SearchBar searchType="semester" label="학년&학기" />
          <SearchBar searchType="course" label="강의명" />
          <SearchBar searchType="professor" label="교수명" />
        </div>
      </div>
    </div>
  );
}

export default SearchFrame;
