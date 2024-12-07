import { useEffect, useState } from "react";
function AttachFile({ sendFileData }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  useEffect(() => {
    sendFileData(files);
  }, [sendFileData, files]);

  return (
    <div className="my-35 flex flex-col px-[130px]">
      <h1 className=" font-bold mt-3">파일 첨부</h1>
      <div className="mb-6 text-sm">
        100MB 이하의 pdf 파일만 등록할 수 있습니다.
      </div>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        accept=".pdf"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default AttachFile;
