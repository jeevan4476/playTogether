import  { useState } from "react";
import Appbar from "./appbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
export default function UserDetailsUpdate() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token).id;
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    id: decoded,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/users/update", details).then((res) => {
            console.log(res.data);
        navigate("/profile");
        }
    ).catch((err) => {
        console.log(err);
    }
    );

  };

  return (
    <>
    <Appbar/>
     <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Update Your Details
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your name"
              value={details.username}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
              value={details.email}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter a new password"
              value={details.password}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          


          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-all"
            onClick={handleSubmit}
          >
            Update Details
          </button>
        </form>
      </div>
    </div>
    </>
   
  );
}
