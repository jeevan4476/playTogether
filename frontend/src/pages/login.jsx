import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Appbar from "../components/appbar";

export default function LoginPage() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = () => {
        axios
            .post("http://localhost:3000/users/signin", details)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                navigate("/");
            })
            .catch((e) => {
                console.error("Error during login:", e);
                alert("Login Failed!");
            });
    };

    return (
        <>
            <Appbar />
            <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-blue-100 flex justify-center items-center">
                <div className="bg-white rounded-3xl w-full max-w-lg h-auto p-8 shadow-xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-2xl font-bold text-blue-600">Login</p>
                        <Link
                            to="/"
                            className="text-gray-400 hover:text-gray-600 text-lg"
                        >
                            &times;
                        </Link>
                    </div>
                    <hr className="mb-6 border-gray-300" />

                    {/* Form */}
                    <div className="space-y-6">
                        {/* username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-300" />

                    {/* Signup Link */}
                    <p className="text-center text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-500 font-semibold hover:underline"
                        >
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
