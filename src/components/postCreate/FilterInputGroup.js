import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

function FilterInputGroup({ sendFilterData }) {
  const [filters, setFilters] = useState({
    grade: "",
    semester: "",
    courseName: "",
    professor: "",
    info: "",
  });

  // 설명 추가

  const handleChange = (key) => (e) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  useEffect(() => {
    sendFilterData(filters);
  }, [filters, sendFilterData]);

  return (
    <div className="flex my-4 bg-transparent justify-center items-center">
      <div className="px-[130px] bg-transparent rounded-xl space-y-6">
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
        <div className="w-full ">
          <textarea
            className="w-full bg-search-filter-color h-[120px] mt-4 rounded-xl p-3"
            placeholder="설명을 입력하세요."
            value={filters.info}
            onChange={handleChange("info")}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default FilterInputGroup;