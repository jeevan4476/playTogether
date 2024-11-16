import { useState } from 'react';
import LoginPage from '../pages/login';
import './styling.css';

export default function Appbar() {
    const [showInjectedContent, setShowInjectedContent] = useState(false);

    return (
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-50">
            <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">playTogether</span>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="BANGALORE"
                        className="border rounded-full py-1 px-3"
                    />
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-black text-lg">
                    Home
                </a>
                <a href="#" className="text-black text-lg">
                    Play
                </a>
                <a href="#" className="text-black text-lg">
                    Book
                </a>
                <button
                    className="text-black text-lg"
                    onClick={() => setShowInjectedContent(true)}
                >
                    Login/Signup
                </button>
                {showInjectedContent && (
                    <LoginPage setShowInjectedContent={setShowInjectedContent} />
                )}
            </div>
        </div>
    );
}
