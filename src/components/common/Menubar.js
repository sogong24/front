import { Link, useLocation } from 'react-router-dom';

function Menubar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-blue-500' : 'text-gray-500';
    };

    return (
        <div className='fixed bottom-0 w-[700px] h-16 bg-white border-t border-gray-200'>
            <div className='flex justify-around items-center'>
                {/* 홈 메뉴 */}
                <Link to="/" className={`flex flex-col items-center ${isActive('/')}`}>
                    <div className='w-6 h-6 mb-1'>
                        <div className="w-full h-full border-2 border-current" />
                    </div>
                <span className="text-us">홈</span>
                </Link>

                {/* 검색 메뉴 */}
                <Link to="/search" className={`flex flex-col items center ${isActive('/search')}`}>
                    <div classname="w-6 h-6 mb-1">
                        <div className="w-full h-full rounded-full border-2 border-current"  /> 
                    </div>
                    <span className="text-xs">검색</span>
                </Link>

                {/* 게시글 작성 메뉴 */}
                <Link to="/post/create" className={`flex flex-col items-center ${isActive('/post/create')}`}>
                    <div className="w-6 h-6 mb-1">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-4 h-0.5 bg-current absolute" />
                            <div className="w-0.5 h-4 bg-current absolute" />
                        </div>
                    </div>
                    <span className="text-xs">게시글 작성</span>
                </Link>

                <Link to="/mypage" className={`flex flex-col items-center ${isActive('/mypage')}`}>
                    <div className="w-6 h-6 mb-1">
                        <div className="w-full h-full rounded-full border-2 border-current "/>
                    </div>
                    <span className="text-xs">마이페이지</span>
                </Link>
            </div>
        </div>
    );
}

export default Menubar;