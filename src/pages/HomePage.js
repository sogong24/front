import React from 'react';
import SearchFrame from '../components/common/SearchFrame';

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font bold text-gray-800-mb-4">
                        강의 검색
                    </h1>
                </div>
            </div>
            <SearchFrame />
        </div>
    );
}

export default HomePage;