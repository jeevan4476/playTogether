import axios from "axios";
import { useState } from "react";
import Appbar from "../components/appbar";
import { useUser } from "../hooks/index";
import { useNavigate } from "react-router-dom";

export default function Profile() {
const { data ,refetch } = useUser();
const [isOpen, setIsOpen] = useState(false);
const [selectedBookingId, setSelectedBookingId] = useState(null);
const bookings = data?.bookings || [];
const navigate = useNavigate();

const bio ="Avid sports enthusiast. Always ready for a game of football or cricket. Hit me up if you want to play a game together!";
const favoriteSports = ["Football", "Cricket", "Badminton"];

const handleCancel = async () => {
    try{
        await axios.delete(`http://localhost:3000/bookings/${selectedBookingId}`);
        setIsOpen(false);
        refetch();
    }catch(e){
        console.log(e);
    }

}
return (
    <>
        <Appbar />
        <div className="lg:mx-20 mt-8">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
        
        <div className="flex flex-col items-center md:items-start">
        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
        <img 
            src="https://cdn0.iconfinder.com/data/icons/doodle-general-office/91/Doodle_General_-_Office_33-512.png" 
            alt="Profile"
            className="w-full h-full object-cover"
        />
    </div>
            <button onClick={()=>{
                localStorage.removeItem('token');
                navigate('/');
            }}>
                <label className="bg-red-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-red-600">
                    Logout
                </label>
            </button>
        </div>

        {/* User Info */}
        <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">{data?.username || "Username"}</h1>
            <p className="text-gray-600 text-sm">{data?.email || "Email"}</p>
            <p className="text-gray-600 text-sm mt-1">Bangalore, India</p>
            <p className="text-gray-800 mt-4 leading-relaxed">{bio}</p>
        </div>
    </div>
        
        <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Favorite Sports</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {favoriteSports.map((sport, index) => (
                <div
                key={index}
                className="bg-blue-100 text-blue-700 text-center py-2 px-4 rounded-lg font-medium"
                >
                {sport}
                </div>
            ))}
            </div>
        </div>

        <div className="mt-8 ">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Bookings</h2>
            <div className="max-h-96 overflow-y-auto">
            <div className="space-y-4">
            {bookings.length > 0 ? (
                bookings.map((booking) => (
                <div
                    key={booking._id} 
                    className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{booking.turf.name}</h3>
                    <p className="text-gray-600">Date: {booking.date}</p>
                    </div>
                    <button 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={()=>{
                        setIsOpen(true)
                        setSelectedBookingId(booking._id)
                        }}>
                    Cancel
                    </button>
                </div>
            ))
            ) : (
                <p className="text-gray-600">You don’t have any bookings yet.</p>
            )}
            </div>
            </div>
        </div>
        {
            isOpen && (
                <div
            id="deleteModal"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
            >
                <div className="relative p-4 w-full max-w-md h-auto">
                <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button
                    type="button"
                    className="text-gray-400 absolute top-2.5 right-2.5"
                    onClick={() => setIsOpen(false)}
                    >
                    &times;
                    </button>
                    <svg
                    className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                    <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Are you sure you want to delete this item?
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border"
                    >
                        No, cancel
                    </button>
                    <button
                        onClick={handleCancel}
                        className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        Yes, I&apos;m sure
                    </button>
                    </div>
                </div>
                </div>
            </div>
        )
        }
        </div>
    </>
);
}
