import { useParams } from "react-router-dom";
import { useTurf } from "../hooks";
import Appbar from "../components/appbar";
import {  useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function BookVenue() {
    const { id } = useParams(); 
    const navigate  = useNavigate()
    const token = localStorage.getItem("token");
    const userId = jwtDecode(token).id;
    const { data: venue } = useTurf(id);
    const [body,setBody] = useState({
        startTime:"",
        timeSlot:"",
        date:""
    })
    const [isOpen,setIsOpen] = useState(false)
    function sendBooking (){
        axios.post(`http://localhost:3000/bookings/event/${id}`,body,{
            headers:{
                "userId":userId
            }
        }).then(()=>{
            navigate("/")
        }).catch(e=>{
            console.log(e)
        })
    }
    if (!venue) {
        return <p className="text-center text-gray-700 mt-20">Venue not found.</p>;
    }

    return (
        <>
        <Appbar/>
        <div className="pt-5 grid justify-items-center ">
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800">{venue.name}</h1>
            <p className="text-gray-500 text-lg mt-2">{venue.location}</p>

            <div className="mt-6">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Sports</label>
                <input
                type="text"
                value={`${venue.category} `}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-lg"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Date</label>
                <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-lg"
                onChange={(e)=>{
                    setBody((prev) => ({
                        ...prev,
                        date: e.target.value,
                    })
    )}}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Start Time</label>
                <input
                type="time"
                className="w-full border border-gray-300 p-2 rounded-lg"
                onChange={(e)=>{
                    setBody((prev) => ({
                        ...prev,
                        startTime: e.target.value,
                    })
    )}}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Duration (in hours)</label>
                <input
                type="number"
                min="1"
                max="24"
                defaultValue="1"
                className="w-full border border-gray-300 p-2 rounded-lg"
                onChange={(e)=>{
                    setBody((prev) => ({
                        ...prev,
                        timeSlot: e.target.value,
                    })
    )}}
                />
            </div>

            <button
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                onClick={() => setIsOpen(true)}
            >
                Confirm Booking
            </button>
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
                    Are you sure you want to book?
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border"
                    >
                        No, cancel
                    </button>
                    <button
                        onClick={sendBooking}
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
