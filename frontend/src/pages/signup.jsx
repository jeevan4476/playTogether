// import React from "react";

// export default function Signup() {
//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-200">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
//             Signup
//             </h2>
//             <form>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Email</label>
//                 <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Password</label>
//                 <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Confirm Password</label>
//                 <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>
//             <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//                 Signup
//             </button>
//             </form>
//         </div>
//         </div>
//   );
// }
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage({ setShowInjectedContent }) {
    const [details, setDetails] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = () => {
        axios
            .post("http://localhost:3000/users/signup", details)
            .then((res) => {
                console.log(res.data);
                alert("Signup Successful!");
                setShowInjectedContent(false); // Close modal after successful signup
            })
            .catch((e) => {
                console.error("Error during signup:", e);
                alert("Signup Failed!");
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
                    <p className="text-lg font-bold">Signup</p>
                    <Link to='/'
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setShowInjectedContent(false)}
                    >
                        X
                    </Link>
                </div>
                <hr />

                {/* Form */}
                <div className="mt-6 space-y-4">
                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                            Username
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

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) =>
                                setDetails((prev) => ({
                                    ...prev,
                                    email: e.target.value,
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

                    {/* Signup Button */}
                    <button
                        className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Signup
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-6" />

                {/* Login Link */}
                <p className="text-center text-gray-700">
                    Already have an account?{" "}
                    <Link to="/login" className="text-gray-500 hover:underline font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
