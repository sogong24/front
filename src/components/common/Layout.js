import React from 'react';
import Menubar from './Menubar';
import SettingBar from './SettingBar';
// import usePageRender from '../../hooks/usePageRender';

function Layout({ children }) {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <div className='w-[700px] min-h-screen mx-auto relative pb-16 bg-white flex flex-col'>
                <div className='sticky top-0 bg-white z-10 border-b'>
                    <SettingBar/>
                </div>
                {children}
                <Menubar />
            </div>
        </div>
    );
}

export default Layout;