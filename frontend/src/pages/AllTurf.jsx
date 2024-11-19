import { TurfCard } from "../components/turf";
import { useTurfs } from "../hooks";
import SkeletonLoader from "../components/Loader";

export default function All() {
    const { data, loading } = useTurfs();

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-indigo-700">Nearby Turfs and Sports Venues</h1>
                <p className="text-gray-600 mt-2">Explore top-rated venues near you</p>
            </div>

            {/* Cards Section */}
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
                    />
                ))}
            </div>
        </div>
    );
}
