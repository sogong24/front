import { useLocation } from 'react-router-dom';
import Menubar from './Menubar';
import SearchFrame from './SearchFrame';
import SettingBar from './SettingBar';

function Layout({ children }) {
    const location = useLocation();
    const showSearchFrame = ['/', '/search'].includes(location.pathname);

    return (
        <div className='w-[700px] min-h-screen mx-auto relative pb-16 bg-[#f5f5f5]'>
            <div className='sticky top-0 bg-white z-10'>
                <SettingBar/>
            </div>
            {children}
            {showSearchFrame && <SearchFrame />} 
            {/* serachbar를 위한 frame, tempframe는 임시로 만든 프레임 */}
            <Menubar />
        </div>
    );
}

export default Layout;