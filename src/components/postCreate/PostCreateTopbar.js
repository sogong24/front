import { IoIosClose } from "react-icons/io";

function PostCreateTopbar() {
  const clickComplete = () => {};

  const clickClose = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <IoIosClose className="cursor-pointer" size={50} onClick={clickClose} />
        <h1 className="text-2xl font-bold">필기 등록</h1>
        <button>
          <div
            className="px-2 py-1 bg-button-red rounded-xl border border-black"
            onClick={clickComplete}
          >
            <div className="text-white">완료</div>
          </div>
        </button>
      </div>
      <div className="border-b my-6 border-black"></div>
    </div>
  );
}

export default PostCreateTopbar;
