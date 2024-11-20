import { TurfCard } from "../components/turf";
import { useCategoryTurfs } from "../hooks";
import { useParams } from "react-router-dom";

export default function SpecificCategory() {
    const { sport } = useParams();
    const { data } = useCategoryTurfs(sport);
    
    return (
        <div className="bg-gray-100 min-h-screen py-10">
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-indigo-700">Nearby {sport} Turfs</h1>
            <p className="text-gray-600 mt-2">Explore top-rated venues near you</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
            {data.map((a) => (
                <TurfCard
                    key={a._id}
                    id={a._id}
                    title={a.name}
                    location={a.address}
                    rating={a.rating}
                    reviews={a.reviews}
                    image={a.image}
                    price={a.price}
                />
            ))}
        </div>
    </div>
    );
    }
