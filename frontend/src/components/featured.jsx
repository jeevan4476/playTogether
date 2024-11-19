export default function Feature() {
    return (
        <div className="container mx-auto p-6 bg-indigo-50 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Featured Games</h2>
            <p className="text-gray-600 mb-8">Check out these popular games available now</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition hover:scale-90">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Open Now</span>
                    <div className="my-4 h-32 bg-gray-200 rounded"></div>
                    <h3 className="font-semibold text-gray-800">Aquilla Arena</h3>
                    <p className="text-sm text-gray-600">Location: Bangalore</p>
                </div>
                {/* Card 2 */}
                <div className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition hover:scale-90">
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">5 Star Rating</span>
                    <div className="my-4 h-32 bg-gray-200 rounded"></div>
                    <h3 className="font-semibold text-gray-800">Sama Turf</h3>
                    <p className="text-sm text-gray-600">Location: Bangalore</p>
                </div>
                {/* Card 3 */}
                <div className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition hover:scale-90">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Book Now</span>
                    <div className="my-4 h-32 bg-gray-200 rounded"></div>
                    <h3 className="font-semibold text-gray-800">Camp Nou</h3>
                    <p className="text-sm text-gray-600">Location: Bangalore</p>
                </div>
            </div>
        </div>
    );
}
