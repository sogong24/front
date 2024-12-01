import { useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Mypage from '../pages/MyPage';
import PostCreatePage from '../pages/PostCreatePage';

const usePageRender = () => {
    const location = useLocation();

    const renderPage = () => {
        switch (location.pathname) {
            case "/":
                return <HomePage />;
            case "/mypage":
                return <Mypage />;
            case "/post/create":
                return <PostCreatePage />
            default:
                return <HomePage />;
        }
    };

    return renderPage;
};

export default usePageRender;
