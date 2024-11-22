import { Outlet, useNavigate } from "react-router-dom";
import Appbar from "../components/appbar";

export default function Layout () {
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const selectedSport = e.target.value;
        if(selectedSport === 'all') return navigate('/book')
        else navigate(`/book/${selectedSport}`)
    }
    return(
        <>
            <Appbar/>
            <div className="p-4 text-center bg-indigo-100">
        <label htmlFor="sport-select" className="block mb-2 text-lg text-indigo-900 font-bold">
            The best-rated play arenas in your city
        </label>
        <select
            id="sport-select"
            onChange={handleChange}
            className="border border-indigo-300 rounded-lg p-2 shadow-md cursor-pointer mb-4 "
            
        >
            <option value="select" disabled>Select Sport</option>
            <option value="all">All</option>
            <option value="football">Football</option>
            <option value="tennis">Tennis</option>
            <option value="cricket">Cricket</option>
        </select>
        <main className="p-4 min-h-screen">
            <Outlet/>
        </main>   
        </div>
        </>
    )
}