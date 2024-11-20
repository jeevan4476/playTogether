    import React from "react";
import { Link } from "react-router-dom";

    const PaymentPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Payment Details</h2>

            <form>
            {/* Cardholder Name */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Cardholder Name
                </label>
                <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                />
            </div>

            {/* Card Number */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="card-number">
                Card Number
                </label>
                <input
                type="text"
                id="card-number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9012 3456"
                />
            </div>

            {/* Expiry Date & CVV */}
            <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="expiry-date">
                    Expiry Date
                </label>
                <input
                    type="text"
                    id="expiry-date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YY"
                />
                </div>
                <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cvv">
                    CVV
                </label>
                <input
                    type="text"
                    id="cvv"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="123"
                />
                </div>
            </div>

            {/* Pay Button */}
            <Link
                to="/profile"
                className="w-full inline-block text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Pay Now
            </Link>
            </form>
        </div>
        </div>
    );
    };

    export default PaymentPage;
