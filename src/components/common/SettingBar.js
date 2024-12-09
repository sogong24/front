import React from 'react';
import { FaCog } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

function SettingBar() {

    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center">
                <div className="mr-4">
                    {/* user Nickname - DB에서 가져오는 건 추후에 구현  */}
                    <span className="text-gray-700 font-semibold">ID : </span>
                </div>
                <button onClick={handleLogout} className="text-red-500">
                    Logout
                </button>
            </div>
            <div>
                <FaCog className="text-gray-600" size={24} />
            </div>
        </div>
    )
}

export default SettingBar;