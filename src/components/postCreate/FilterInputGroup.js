import { FaSearch } from "react-icons/fa";

function FilterInputGroup() {
  const completeClick = () => {};
  // 완료 버튼을 눌렀을 때

  return (
    <div className="flex my-20 bg-transparent justify-center items-center">
      <div className="w-[400px] bg-transparent rounded-xl  ">
        <div className="space-y-10">
          <div className="flex justify-between">
            <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center mr-5">
              <span className="pl-4 font-semibold flex-none">학년: </span>
              <input
                type="text"
                className="pl-3 bg-transparent rounded-2xl h-10 w-full"
              />
            </div>
            <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center">
              <span className="pl-3 font-semibold flex-none">학기: </span>
              <input
                type="text"
                className="pl-4 bg-transparent rounded-2xl h-10 w-full"
              />
              <FaSearch className="flex-none pr-3" size={30} />
            </div>
          </div>
          <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center">
            <span className="pl-3 flex-none font-semibold">강의명: </span>
            <input
              type="text"
              className="pl-4 bg-transparent rounded-2xl h-10 w-full"
            />
            <FaSearch className="flex-none pr-3" size={30} />
          </div>
          <div className="bg-search-filter-color rounded-2xl shadow-md border flex items-center">
            <span className="pl-3 flex-none font-semibold">교수명: </span>
            <input
              type="text"
              className="pl-4 bg-transparent rounded-2xl h-10 w-full"
            />
            <FaSearch className="flex-none pr-3" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterInputGroup;
