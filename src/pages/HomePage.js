import React, { useEffect, useState } from 'react';
import SearchFrame from "../components/common/SearchFrame";
import api from '../api/axios';

function HomePage() {
    const [testMessage, setTestMessage] = useState('');

    useEffect(() => {
        // backend test
        const testConnection = async () => {
            try {
                const response = await api.get('/');
                setTestMessage(response.data);
                console.log('backend test success', response.data);
            } catch (error) {
                console.error('backend test fail', error);
                setTestMessage('backend test fail');
            }
        }

        testConnection();
    }, []);

    return (
        <div className="min-h-screen">
            <div className="p-4">
                <p>backend connection state: {testMessage}</p>
            </div>
            <SearchFrame />
        </div>
    );
}

export default HomePage;