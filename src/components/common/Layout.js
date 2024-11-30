import { useLocation } from 'react-router-dom';
import Menubar from './Menubar';
import SettingBar from './SettingBar';
import HomePage from '../../pages/HomePage';
import Mypage from '../../pages/MyPage';
import PostCreatePage from '../../pages/PostCreatePage';

function Layout() {
  const location = useLocation();

  const renderPage = () => {
    switch (location.pathname) {
      case "/":
        return <HomePage />;
      case "/mypage":
        return <Mypage />;
      case "/post/create":
        return <PostCreatePage />;
      default:
        return <HomePage />;
    }
  };

    return (
        <div className='bg-white min-h-screen'>
            <div className='w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50'>
                <div className='sticky top-0 bg-white z-10'>
                    <SettingBar/>
                </div>
                {renderPage()}
                <Menubar />
            </div>
        </div>
    );
}

export default Layout;
