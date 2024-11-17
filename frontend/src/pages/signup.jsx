import React from "react";

export default function Signup() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Signup
            </h2>
            <form>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Signup
            </button>
            </form>
        </div>
        </div>
  );
}
