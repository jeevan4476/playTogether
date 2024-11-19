import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/appbar";

export default function SignupPage() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = () => {
        axios
            .post("http://localhost:3000/users/signup", details)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/');
            })
            .catch((e) => {
                console.error("Error during signup:", e);
                alert("Signup Failed!");
            });
    };

    return (
        <>
            <Appbar />
            <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-blue-100 flex justify-center items-center">
                {/* Modal Content */}
                <div className="bg-white rounded-3xl w-full max-w-lg h-auto p-8 shadow-xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-2xl font-bold text-indigo-600">Signup</p>
                        <Link
                            to='/'
                            className="text-gray-400 hover:text-gray-600 text-lg"
                        >
                            &times;
                        </Link>
                    </div>
                    <hr className="mb-6 border-gray-300" />

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:indigo-blue-500 focus:indigo-blue-500"
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
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:indigo-blue-500 focus:indigo-blue-500"
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
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:indigo-blue-500 focus:borderindigo-500"
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
                            className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-150"
                            onClick={handleSubmit}
                        >
                            Signup
                        </button>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-300" />

                    {/* Login Link */}
                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-indigo-500 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
