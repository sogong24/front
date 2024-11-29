import { useLocation } from "react-router-dom";
import Menubar from "./Menubar";
import SearchFrame from "./SearchFrame";
import SettingBar from "./SettingBar";

function Layout({ children }) {
  const location = useLocation();
  const showSearchFrame = ["/", "/search"].includes(location.pathname);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50">
        <div className="sticky top-0 bg-white z-10">
          <SettingBar />
        </div>
        <div className="min-h-screen">
          {children}
          {showSearchFrame && (
            <div className="bg-white">
              <SearchFrame />
            </div>
          )}
        </div>
        <Menubar />
      </div>
    </div>
  );
}

export default Layout;
