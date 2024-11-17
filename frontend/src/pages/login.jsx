// import axios from "axios";
// import { useState } from "react";

// export default function LoginPage({setShowInjectedContent}){
//     const [details,setDetails] = useState({
//         username:"",
//         password:"",
//     })
//     const handleSubmit = ()=>{
//         axios.post('http://localhost:3000/users/signin',details)
//         .then((res)=>{
//             console.log(res.data)
//         })
//         .catch((e)=>{
//             console.log(e)
//         })
//     }
//     return((
//         <div className="modal-overlay " onClick={()=>{setShowInjectedContent((prev)=>!prev)}}>
//             <div className=" bg-white rounded-3xl w-1/2 h-3/4 grid grid-cols-2 " onClick={(e) => e.stopPropagation()}>
//                 <div className="bg-gray-100 rounded-3xl"></div>
//                 <div className="bg-blend-lighten hover:bg-blend-darken">
//                 <div className="font-bold  grid grid-cols-3 p-4 gap-12 content-between" > 
//                 <p>login/signup</p><div></div>
//                 <button className='bg-white rounded-lg ' onClick={()=>{setShowInjectedContent(false)}}>X</button>
//                 </div><hr />
//                 <div className="h-3/4 flex flex-col justify-between p-4 ">
//                 <div></div>
//                 <div><p className="text-left" >Email</p>
//                 <input type="text" placeholder="enter username" className="bg-gray-200 w-full p-2 rounded" onChange={(e)=>{
//                     setDetails(c=>({
//                         ...c,
//                         username:e.target.value
//                     }))}}/>
//                 </div>
//                 <div><p className="text-left" >Password</p>
//                 <input type="password" placeholder="enter password" className="bg-gray-200 w-full p-2 rounded" onChange={(e)=>{
//                     setDetails(c=>({
//                         ...c,
//                         password:e.target.value
//                     }))}}/>
//                 </div>
//                 <button className="bg-gray-300 py-2 rounded hover:bg-gray-400" onClick={handleSubmit}>Login</button><div></div>
//                 </div>
//                     <hr/>
//                     <p className="font-bold">Dont have account??</p>
//                     <Link to="/signup" className="text-blue-500 hover:underline font-bold">Signup</Link>                </div>
//             </div>
//         </div>
//     ))
// }


import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage({ setShowInjectedContent }) {
    const [details, setDetails] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = () => {
        axios
            .post("http://localhost:3000/users/signin", details)
            .then((res) => {
                console.log(res.data);
                // Add further logic here, like storing tokens or redirecting.
            })
            .catch((e) => {
                console.error("Error during login:", e);
            });
    };

    return (
        <div
            className="modal-overlay fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
            onClick={() => setShowInjectedContent(false)}
        >
            {/* Modal Content */}
            <div
                className="bg-white rounded-3xl w-full max-w-lg h-auto p-6 shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-bold">Login/Signup</p>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setShowInjectedContent(false)}
                    >
                        X
                    </button>
                </div>
                <hr />

                {/* Form */}
                <div className="mt-6 space-y-4">
                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) =>
                                setDetails((prev) => ({
                                    ...prev,
                                    username: e.target.value,
                                }))
                            }
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) =>
                                setDetails((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-6" />

                {/* Signup Link */}
                <p className="text-center text-gray-700">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-gray-500 hover:underline font-medium">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
}
