

import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../pages/login';
import './styling.css';

export default function Appbar() {
    const [showInjectedContent, setShowInjectedContent] = useState(false);

    return (
        <div className="flex items-center justify-between p-4 border-b">
            {/* Logo and Search Bar */}
            <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">playTogether</span>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="BANGALORE"
                        className="border rounded-full py-1 px-3"
                    />
                    <i className="fa fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <Link to="/" className="text-black text-lg">Home</Link>
                <Link to="/Book" className="text-black text-lg">Book</Link>
                <button
                    className="text-black text-lg"
                    onClick={() => setShowInjectedContent(true)}
                >
                    Login/Signup
                </button>
            </div>

            {/* Injected Login Modal */}
            {showInjectedContent && (
                <LoginPage setShowInjectedContent={setShowInjectedContent} />
            )}
        </div>
    );
}
