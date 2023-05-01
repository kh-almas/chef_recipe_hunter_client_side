import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md mx-auto text-center">
                <img src="https://via.placeholder.com/500x200?text=404+Not+Found" alt="404 - Not Found" className="mb-8" />
                <h2 className="text-2xl font-bold mb-4">Oops! We couldn't find the page you're looking for.</h2>
                <p className="text-gray-500 mb-8">The link you followed may be broken or the page may have been removed.</p>
                <Link to="/" className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium">Go back to Home</Link>
            </div>
        </div>
    );
}

export default NotFound;