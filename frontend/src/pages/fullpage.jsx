    import React from "react";
import { Link, useParams } from "react-router-dom";
import { cards } from "../components/data"; // Replace with the actual path to your data file.

    export default function VenueDetails() {
    const { id } = useParams(); // Get venue ID from URL
    const venue = cards.find((card) => card.id === parseInt(id)); // Find the venue by ID

    if (!venue) {
        return <p className="text-center text-gray-700 mt-20">Venue not found.</p>;
    }

    return (
        <div className="lg:mx-20 mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Venue Image */}
            <img
            src={venue.image || "https://via.placeholder.com/600x300"}
            alt={venue.title || "Venue"}
            className="w-full h-64 object-cover rounded-md"
            />

            {/* Venue Info */}
            <h1 className="text-2xl font-bold text-gray-800 mt-6">{venue.title}</h1>
            <p className="text-gray-500 text-lg mt-2">{venue.location}</p>
            <div className="flex items-center gap-2 text-yellow-500 mt-2">
            ⭐ {venue.rating || "N/A"}
            <span className="text-gray-400 text-sm">({venue.reviews || 0} reviews)</span>
            </div>

            {/* Description Section */}
            <p className="text-gray-700 mt-4">
            Welcome to {venue.title}! This venue offers excellent facilities for
            sports enthusiasts, including high-quality turf and amenities. Book
            your spot now to enjoy the experience.
            </p>

            {/* Booking Button */}
            <Link
            to={`/book/${venue.id}`}
            className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-600 inline-block text-center"
            >
            Book Now
            </Link>

            {/* Back to List Button */}
            <Link
            to="/Book"
            className="text-blue-500 hover:underline mt-4 block"
            >
            Back to Venue List
            </Link>
        </div>
        </div>
    );
    }
