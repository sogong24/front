import React from "react";
import SearchFilters from "../search/SearchFilters";

function SearchFrame({ onSearchParamsChange}) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
        <SearchFilters onSearchParamsChange={onSearchParamsChange} />
    </div>
  );
}

export default SearchFrame;
