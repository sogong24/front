import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function PostCreateTopbar() {
  const navigate = useNavigate();

  const clickComplete = () => {};
  const clickClose = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <IoIosClose className="cursor-pointer" size={50} onClick={clickClose} />
        <h1 className="text-2xl font-bold">필기 등록</h1>
        <button
          className="px-2 py-1 mr-2 bg-button-red rounded-xl border border-black"
          onClick={clickComplete}
        >
          <div className="text-white">완료</div>
        </button>
      </div>
      <div className="border-b my-6 border-black"></div>
    </div>
  );
}

export default PostCreateTopbar;
