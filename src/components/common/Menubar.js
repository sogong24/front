import { Link, useLocation } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { CgAttachment, CgUser } from 'react-icons/cg';


function Menubar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-500" : "text-gray-500";
  };

  return (
    <div className="fixed bottom-0 w-[700px] h-16 bg-white border-t border-gray-200">
      <div className="flex justify-around align-items-center h-full">
        {/* 게시글 작성 메뉴 */}
        <Link
          to="/post/create"
          className={`flex flex-col justify-center items-center ${isActive("/post/create")}`}
        >
         <CgAttachment className="text-gray-700" size={25} />
        </Link>

        {/* 홈 메뉴 */}
        <Link to="/home" className={`flex flex-col justify-center items-center ${isActive("/")}`}>
          <FaHome className="text-gray-700" size={30} />
        </Link>

        {/* 마이페이지 */}
        <Link
          to="/mypage"
          className={`flex flex-col justify-center items-center ${isActive("/mypage")}`}
        >
          <CgUser className="text-gray-700" size={30} />
        </Link>
      </div>
    </div>
  );
}

export default Menubar;
