import { Link } from 'react-router-dom';
import './styling.css';
import { useState, useEffect } from 'react';

export default function Appbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [location, setLocation] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }

        const savedLocation = localStorage.getItem('location');
        if (savedLocation) {
            setLocation(savedLocation);
        }
    }, []);

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
        localStorage.setItem('location', newLocation);
    };

    return (
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-indigo-500 text-white z-10  rounded-b-lg shadow-lg shadow-indigo-500/50">

            {/* Logo and Search Bar */}
            <div className="flex items-center space-x-4">
                <span className="font-bold text-xl bg-gradient-to-r from-green-200 to-yellow-200 text-transparent bg-clip-text">playTogether</span>
                <div className="relative">
                    <input
                        type="text"
                        placeholder={location || 'Search for a location'}
                        className="border border-indigo-400 bg-white text-gray-700 rounded-full py-1 px-3 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onChange={handleLocationChange}
                        value={location}
                    />
                    <i className="fa fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400"></i>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
                <Link to="/" className="hover:text-indigo-200 text-white text-lg">Home</Link>
                <Link to="/Book" className="hover:text-indigo-200 text-white text-lg">Book</Link>
                {isLoggedIn ? (
                    <Link to="/profile" className="hover:text-indigo-200 text-white text-lg">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src="" alt="User" />
                        </div>
                    </Link>
                ) : (
                    <Link to="/Login" className="hover:text-indigo-200 text-white text-lg">
                        Login/Signup
                    </Link>
                )}
            </div>
        </div>
    );
}
