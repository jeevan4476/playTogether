/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const TurfCard=({id,title,location,rating,reviews,image,price})=>{
    return (<Link to={`/venue/${id}`} key={id}>
    <div className="bg-white shadow-md rounded-lg relative hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
    style={{ zIndex: 1 }}
    >
    <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
    />
    <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{location}</p>
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
        ⭐ {rating}
        <span className="text-gray-400 text-sm">({reviews})</span>
        </div>
        <div>
        <span className="text-gray-500 text-sm">Price:</span>
        <span className="text-green-500 font-bold text-lg"> &#8377;{price}</span>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-3">
        Bookable
        </button>
    </div>
    </div>
</Link>)
}