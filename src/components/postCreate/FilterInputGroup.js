import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

function FilterInputGroup({ sendData }) {
  const [filters, setFilters] = useState({
    grade: "",
    semester: "",
    courseName: "",
    professor: "",
  });

  const handleChange = (key) => (e) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  useEffect(() => {
    sendData(filters);
  }, [filters, sendData]);

  return (
    <div className="flex my-20 bg-transparent justify-center items-center">
      <div className="px-[130px] bg-transparent rounded-xl space-y-10">
        <div className="flex justify-between">
          <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center mr-5 justify-between">
            <span className="pl-4 font-semibold flex-none">학년: </span>
            <input
              type="text"
              className="pl-3 bg-transparent rounded-2xl h-10 w-full"
              value={filters.grade}
              onChange={handleChange("grade")}
            />
          </div>
          <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center">
            <span className="pl-3 font-semibold flex-none">학기: </span>
            <input
              type="text"
              className="pl-4 bg-transparent rounded-2xl h-10 w-full"
              value={filters.semester}
              onChange={handleChange("semester")}
            />
            <FaSearch className="flex-none pr-3" size={30} />
          </div>
        </div>
        <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center">
          <span className="pl-3 flex-none font-semibold">강의명: </span>
          <input
            type="text"
            className="pl-4 bg-transparent rounded-2xl h-10 w-full"
            value={filters.courseName}
            onChange={handleChange("courseName")}
          />
          <FaSearch className="flex-none pr-3" size={30} />
        </div>
        <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center">
          <span className="pl-3 flex-none font-semibold">교수명: </span>
          <input
            type="text"
            className="pl-4 bg-transparent rounded-2xl h-10 w-full"
            value={filters.professor}
            onChange={handleChange("professor")}
          />
          <FaSearch className="flex-none pr-3" size={30} />
        </div>
      </div>
    </div>
  );
}

export default FilterInputGroup;
