import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Appbar from "../components/appbar";
import { useTurf } from "../hooks";


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
            navigate("/payment")
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

            <Link to="/payment"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                onClick={sendBooking}
            >
                Confirm Booking
            </Link>
            </div>
        </div>
        </div>
        </>
    );
    }
