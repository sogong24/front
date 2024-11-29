import { useEffect, useState } from "react";
import FilterInputGroup from "../components/postCreate/FilterInputGroup";
import PostCreateTopbar from "../components/postCreate/PostCreateTopbar";
import UploadFile from "../components/postCreate/UploadFile";
function PostCreatePage() {
  const [filterData, setFilterData] = useState({});

  const handleFilterData = (filters) => {
    setFilterData(filters);
  };

  useEffect(() => {
    console.log("받은 데이터 : " + JSON.stringify(filterData));
  }, [filterData]);

  return (
    <div className="p-3">
      <PostCreateTopbar courseInfo={filterData} />
      <FilterInputGroup sendData={handleFilterData} />
      <UploadFile />
    </div>
  );
  // FilterInputGroup에서 filterData를 받아 PostCreateTopbar에 넘겨줘야 함.
}

export default PostCreatePage;
