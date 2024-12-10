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
                <button onClick={handleLogout} className="text-red-500">
                    Logout
                </button>
            </div>
            {/* <div>
                <FaCog className="text-gray-600" size={24} />
            </div> */}
        </div>
    )
}

export default SettingBar;