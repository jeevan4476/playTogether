import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Football from './Football';



export default function Book() {
    const [isOpen, setIsOpen] = useState(false);
    let [isFoot,setFoot]=useState(false)

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const Switch=()=>{
        setIsOpen(!isOpen)
        setFoot(!isFoot)
    }
    return (
        <div className='flex flex-col items-center '>
            <h1 className='font-bold text-xl pb-8 '>The best rated playarenas in ur city </h1>
            <div className='w-64 h-32 bg-green-100 rounded-lg shadow-lg   text-black'>
                {/* <p>enter city</p>
                <input type='text' className='' placeholder=''></input> */}
                <p className=' px-5 p-5'>please select ur sport</p>
                <button onClick={toggleDropdown} className="inline-flex justify-center w-full h-10 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"></button>
      {/* Dropdown Menu */}
        {isOpen && (
        <div className=" ml-8 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
            <Link onClick={Switch}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Football</Link>
            <Link onClick={Switch} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cricket</Link>
            <Link onClick={Switch} to="*" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tennis</Link>
        </div>
        </div>)}
        </div><hr className='w-full mt-5'></hr>
        {isFoot && <Football/>}
    </div>)
}
