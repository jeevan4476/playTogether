    import React from "react";

    export default function Profile() {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        location: "Bangalore, India",
        bio: "Avid sports enthusiast. Always ready for a game of football or cricket.",
        favoriteSports: ["Football", "Cricket", "Badminton"],
        bookings: [
        { id: 1, venue: "Game Theory - Joseph's Indian V...", date: "2024-11-20" },
        { id: 2, venue: "Wellness Sports Inc - Kanteerava", date: "2024-11-25" },
        ],
    };

    return (
        <div className="lg:mx-20 mt-8">
        {/* Profile Header */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Picture */}
            <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />

            {/* User Info */}
            <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.location}</p>
            <p className="text-gray-800 mt-4">{user.bio}</p>
            </div>
        </div>

        {/* Favorite Sports Section */}
        <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Favorite Sports</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {user.favoriteSports.map((sport, index) => (
                <div
                key={index}
                className="bg-blue-100 text-blue-700 text-center py-2 px-4 rounded-lg font-medium"
                >
                {sport}
                </div>
            ))}
            </div>
        </div>

        {/* Bookings Section */}
        <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Bookings</h2>
            <div className="space-y-4">
            {user.bookings.map((booking) => (
                <div
                key={booking.id}
                className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{booking.venue}</h3>
                    <p className="text-gray-600">Date: {booking.date}</p>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Cancel
                </button>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    }
