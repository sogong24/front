import Menubar from './Menubar';
import TempFrame from './tempFrame';
function Layout({ children }) {
    return (
        <div className='w-[700px] min-h-screen mx-auto relative pb-16 bg-[#f5f5f5]'>
            {children}
            <TempFrame />
            <Menubar />
        </div>
    );
}

export default Layout;