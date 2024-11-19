import { TurfCard } from "../components/turf";
import { useCategoryTurfs } from "../hooks";
import { useParams } from "react-router-dom";

export default function SpecificCategory() {
    const { sport } = useParams();
    const { data } = useCategoryTurfs(sport);
    
    return (
        <div className="lg:mx-20 mt-8">
        <div className="grid w-full grid-cols-1 justify-items-center">
            <div className="w-full col-span-1 pb-10 px-2 md:px-0">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Nearby Turfs and Sports Venues
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((a) => (
                    <TurfCard
                    key={a._id}
                    id={a._id}
                    title={a.name}
                    location={a.address}
                    rating={a.rating}
                    reviews={a.reviews}
                    image={a.image}
                    />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    }
