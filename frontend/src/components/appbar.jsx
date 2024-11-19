import { Link } from 'react-router-dom';
import './styling.css';
import { useState , useEffect} from 'react';

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
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">

            {/* Logo and Search Bar */}
            <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">playTogether</span>
                <div className="relative">
                    <input
                        type="text"
                        placeholder={location || 'Search for a location'}
                        className="border rounded-full py-1 px-3"
                        onChange={handleLocationChange}
                        value={location}
                        
                    />
                    <i className="fa fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
            </div>
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <Link to="/" className="text-black text-lg">Home</Link>
                <Link to="/Book" className="text-black text-lg">Book</Link>
                {isLoggedIn ? (
                    <Link to="/profile" className="text-black text-lg">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src="" alt="User " />
                    </div>
                    </Link>
                ) : (
                    <Link to="/Login" className="text-black text-lg">
                        Login/Signup
                    </Link>
                )}
            </div>
        </div>
    );
}
