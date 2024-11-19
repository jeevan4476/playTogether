import { Link, useParams } from "react-router-dom"; 
import { useTurf } from "../hooks";
import Appbar from "../components/appbar";

    export default function VenueDetails() {
    const { id } = useParams(); 
    const { data: venue} = useTurf(id);

    if (!venue) {
        return <p className="text-center text-gray-700 mt-20">Venue not found.</p>;
    }

    return (
        <>
        <Appbar/>
        <div className="lg:mx-20 mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
            <img
            src={venue.image || "https://via.placeholder.com/600x300"}
            alt={venue.name || "Venue"}
            className="w-full h-64 object-cover rounded-md"
            />

            <h1 className="text-2xl font-bold text-gray-800 mt-6">{venue.name}</h1>
            <p className="text-gray-500 text-lg mt-2">{venue.location}</p>
            <div className="flex items-center gap-2 text-yellow-500 mt-2">
            ⭐ {venue.rating || "N/A"}
            <span className="text-gray-400 text-sm">({venue.reviews || 0} reviews)</span>
            </div>

            <p className="text-gray-700 mt-4">
            Welcome to {venue.name}! This venue offers excellent facilities for
            sports enthusiasts, including high-quality turf and amenities. Book
            your spot now to enjoy the experience.
            </p>

            <Link
            to={{
                pathname:`/booking/${venue._id}`,
                state:{header : localStorage.getItem("token")}
            }} 
            className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-600 inline-block text-center"
            >
            Book Now
            </Link>

            <Link
            to="/Book"
            className="text-blue-500 hover:underline mt-4 block"
            >
            Back to Venue List
            </Link>
        </div>
        </div></>
    );
    }
