import Menubar from './Menubar';

function Layout({ children }) {
    return (
        <div className='w-[700px] min-h-screen mx-auto relative pb-16 bg-[#f5f5f5]'>
            {children}
            <Menubar />
        </div>
    );
}

export default Layout;