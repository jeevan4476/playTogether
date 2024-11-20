function Carousel() {
    return (
        <div className="flex flex-col items-center space-y-8 p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8 transition ">
            <h1 className="font-bold text-2xl text-indigo-600">HIGHLIGHTS</h1>
            <div className="bg-gray-200 w-full h-64 flex flex-col items-center justify-center rounded-lg shadow-inner">
                <div className="text-center text-lg font-medium text-gray-700">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJSj23elXsNSgAGXfXk3UNPsBQvfBMZgOG0_JodJZMca0L-hW75mXWXLVI8JFGH8RgU4&usqp=CAU" alt="Football" className="w-32 h-32 object-cover" />
                </div>
            </div>
            <div className="w-full text-left space-y-4">
                <p className="font-bold text-lg text-indigo-600">Discover New Games</p>
                <p className="text-gray-600">Find exciting games to play and connect with other players in your area.</p>
                <input
                    className="mt-3 bg-gray-100 border rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter Location..."
                />
            </div>
        </div>
    );
}


export default Carousel;
