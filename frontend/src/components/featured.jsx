export default function Feature(){
    return(
        <div className="container mx-auto p-6">
        {/* <!-- Featured Games Section --> */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Featured Games</h2>
            <p className="text-gray-600 mb-6">Check out these popular games</p>
            <div className="grid grid-cols-3  gap-6">
            {/* <!-- Game Card 1 --> */}
                <div className="border rounded-lg shadow-sm p-4">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Open Now</span>
                    <div className="my-4 h-32 bg-gray-200 rounded"></div>
                    <h3 className="font-semibold">Aquilla arena</h3>
                    <p className="text-sm text-gray-600">Location: bangalore</p>
            </div>
        
            {/* <!-- Game Card 2 --> */}
            <div className="border rounded-lg shadow-sm p-4">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">5 Star Rating</span>
                <div className="my-4 h-32 bg-gray-200 rounded"></div>
                <h3 className="font-semibold">sama turf</h3>
                <p className="text-sm text-gray-600">Location: bangalore</p>
            </div>

            {/* <!-- Game Card 3 --> */}
            <div className="border rounded-lg shadow-sm p-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Book Now</span>
                <div className="my-4 h-32 bg-gray-200 rounded"></div>
                <h3 className="font-semibold">camp nou</h3>
                <p className="text-sm text-gray-600">Location: bangalore</p>
            </div>
        </div>
        </div>
        
        {/* <!-- Latest Blogs Section --> */}
        <div>
            <h2 className="text-2xl font-bold mb-2">Latest Blogs</h2>
            <p className="text-gray-600 mb-6">Stay updated with blogs</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Blog Card 1 --> */}
            <div className="border rounded-lg shadow-sm p-4 flex items-center">
                <div className="h-16 w-16 bg-gray-200 rounded mr-4"></div>
                <div>
                <h3 className="font-semibold">New Game Release</h3>
                <p className="text-sm text-gray-600">Explore exciting new games available now</p>
                </div>
            </div>
        
            {/* <!-- Blog Card 2 --> */}
            <div className="border rounded-lg shadow-sm p-4 flex items-center">
                <div className="h-16 w-16 bg-gray-200 rounded mr-4"></div>
                <div>
                <h3 className="font-semibold">Tips and Tricks</h3>
                <p className="text-sm text-gray-600">Get ahead with expert gaming tips</p>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}