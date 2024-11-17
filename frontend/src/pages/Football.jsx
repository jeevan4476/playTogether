import React from "react";

const cards = [
  {
    id: 1,
    title: "Game Theory - Joseph's Indian V...",
    location: "Vittal Mallya Road (~ 0.1 km)",
    // icon: "🏊", // Replace with an actual icon if needed
    rating: 4.75,
    reviews: 4,
    // image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Wellness Sports Inc - Kanteerava",
    location: "Sampangi Rama Nagar (~ 0.5 km)",
    // icon: "🏋️",
    rating: 5.0,
    reviews: 4,
    // image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Tiento Sports",
    location: "Mission Road (~ 1.1 km)",
    // icon: "⚽",
    rating: 3.7,
    reviews: 110,
    
  },{
    id: 4,
    title: "aquilla sports arena",
    location: "karash home (~ 1.1 km)",
    // icon: "⚽",
    rating: 5,
    reviews: 1100,
    
  }
];

export default function Football() {
    return (
        <div className="lg:mx-20 mt-8">
            <div className="grid w-full grid-cols-1 justify-items-center">
            {/* Title Section */}
                <div className="w-full col-span-1 pb-10 px-2 md:px-0">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Nearby Turfs and Sports Venues</h1>
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                    <div key={card.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={card.image} alt={card.title} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-gray-800">
                                {card.title}
                            </h3>
                            <p className="text-gray-500 text-sm">{card.location}</p>
                            <div className="flex items-center gap-1 mt-2 text-yellow-500">
                                ⭐ {card.rating}
                                <span className="text-gray-400 text-sm">
                                ({card.reviews})
                                </span>
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded mt-3">
                                Bookable
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
  );
}
