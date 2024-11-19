import { Outlet,useNavigate } from "react-router-dom";
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
            <div className="p-4 text-center bg-gray-100">
        <label htmlFor="sport-select" className="block mb-2 text-lg font-semibold">
            The best-rated play arenas in your city
        </label>
        <select
            id="sport-select"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 shadow-md cursor-pointer "
            
        >
            <option value="select">Select Sport</option>
            <option value="all">all</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="cricket">Cricket</option>
        </select>
        <main className="p-4 bg-white min-h-screen">
            <Outlet/>
        </main>   
        </div>
        </>
    )
}