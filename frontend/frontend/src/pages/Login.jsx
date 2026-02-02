import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);   // 👈 yaha data milega
  };

  return (
  
  
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2">
          Please login to continue
        </p>

        {/* Email */}
        <div className="mt-6">
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm text-gray-600">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full mt-2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={handleChange}
            required
          />
        </div>

        {/* Forgot */}
        <div className="flex justify-end mt-3">
          <a href="#" className="text-sm text-indigo-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-indigo-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </form>
    </div>
    
  );
}
