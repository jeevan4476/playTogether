    import React from "react";
import { useParams } from "react-router-dom";
import { cards } from "../components/data"; // Ensure this path points to your cards data file.

    export default function BookVenue() {
    const { id } = useParams(); // Get venue ID from URL
    const venue = cards.find((card) => card.id === parseInt(id)); // Find the venue by ID

    if (!venue) {
        return <p className="text-center text-gray-700 mt-20">Venue not found.</p>;
    }

    return (
        <div className="pt-5 grid justify-items-center ">
        <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Venue Title and Location */}
            <h1 className="text-2xl font-bold text-gray-800">{venue.title}</h1>
            <p className="text-gray-500 text-lg mt-2">{venue.location}</p>

            {/* Booking Form */}
            <form className="mt-6">
            {/* Sports Type */}
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Sports</label>
                <input
                type="text"
                value="Football"
                readOnly
                className="w-full border border-gray-300 p-2 rounded-lg"
                />
            </div>

            {/* Date Picker */}
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Date</label>
                <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-lg"
                />
            </div>

            {/* Time Picker */}
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Start Time</label>
                <input
                type="time"
                className="w-full border border-gray-300 p-2 rounded-lg"
                />
            </div>

            {/* Duration */}
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Duration (in hours)</label>
                <input
                type="number"
                min="1"
                max="24"
                defaultValue="1"
                className="w-full border border-gray-300 p-2 rounded-lg"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
                Confirm Booking
            </button>
            </form>
        </div>
        </div>
    );
    }
