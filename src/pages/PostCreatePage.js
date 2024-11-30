import { useEffect, useState } from "react";
import FilterInputGroup from "../components/postCreate/FilterInputGroup";
import PostCreateTopbar from "../components/postCreate/PostCreateTopbar";
import AttachFile from "../components/postCreate/AttachFile";
function PostCreatePage() {
  const [filterData, setFilterData] = useState({});
  const [fileData, setFileData] = useState([]);

  const handleFilterData = (filters) => {
    setFilterData(filters);
  };

  const handleFileData = (files) => {
    setFileData(files);
  };

  useEffect(() => {
    console.log("받은 데이터 : " + JSON.stringify(filterData));
  }, [filterData]);

  return (
    <div className="p-3">
      <PostCreateTopbar courseInfo={filterData} fileInfo={fileData} />
      <FilterInputGroup sendFilterData={handleFilterData} />
      <AttachFile sendFileData={handleFileData} />
    </div>
  );
  // FilterInputGroup에서 filterData를 받아 PostCreateTopbar에 넘겨줘야 함.
  // Attachfile에서 fileData를 받아 PostCreateTopbar에 넘겨줘야 함.
}

export default PostCreatePage;
