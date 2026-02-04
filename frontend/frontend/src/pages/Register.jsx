
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";

import Img from "../assets/register.jpg";
export default function Register() {

  const navigate = useNavigate()
  const {storetokenInLS} = useAuth()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  })

  const handleChange = (e) => {
    const input = e.target
    const key = input.name
    const value = input.value.trim()
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user)
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user)
      })
      console.log(response)
      if (response.ok) {
        // token
        const res_data = await response.json();
        console.log("res fron server" , res_data)
        storetokenInLS(res_data.token)
      //  localStorage.setItem("token" ,res_data)   storing the token into localStorage
        
        setUser({ username: "", email: "", password: "", phone: "" })  // user input field clear
        navigate("/login")
      }

    }
    catch (error) {
      console.log("register", error)
    }


  }

  return (
    <div className="h-screen w-screen flex">

      {/* Left Image */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src={Img}
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-500 w-full max-w-md p-8 text-left text-sm rounded-xl shadow-xl">

          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Registration Now
          </h2>
          <p>username *</p>
          <input
            className="w-full border my-3 border-gray-300 outline-none rounded-full py-3 px-5"
            name="username"
            type="text"
            placeholder="Enter your full name"
            required
            onChange={handleChange}
          />
          <p>email *</p>
          <input
            className="w-full border my-3 border-gray-300 outline-none rounded-full py-3 px-5"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
          <p>password *</p>
          <input
            className="w-full border my-3 border-gray-300 outline-none rounded-full py-3 px-5"
            name="password"
            type="password"
            placeholder="Create password"
            required
            onChange={handleChange}
          />
          <p>phone *</p>
          <input
            className="w-full border my-3 border-gray-300 outline-none rounded-full py-3 px-5"
            name="phone"
            type="number"
            placeholder="Type phone number"
            required
            onChange={handleChange}
          />

          <button

            type="submit"
            className="w-full mt-6 mb-3 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition py-3 rounded-full text-white text-lg"
          >
            Register Now
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 underline">
              Login Now
            </a>
          </p>

        </form>
      </div>

    </div>
  );
}
