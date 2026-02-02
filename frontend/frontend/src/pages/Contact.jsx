import { useState } from "react";

export default function Contact() {

const [user , setUser] = useState({
  name: "",
  email:"",
  phone:"",
  textarea: ""
})

const handleChange = (e)=> {
 const input = e.target
 const key = input.name
 const value = input.value

 setUser( {
  ...user,
  [key] : value
 })
}

const handleSubmit = (e)=> {
  e.preventDefault()
  console.log(user)
}

  return (
    <div className="flex h-[700px] w-full">
      {/* Left Image */}
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full object-cover"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="Contact"
        />
      </div>

      {/* Right Form */}
      <div className="w-full flex flex-col items-center justify-center">
        <form
        onSubmit={handleSubmit}
         className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">
            Contact Us
          </h2>
          <p className="text-sm text-gray-500/90 mt-3">
            We would love to hear from you
          </p>

          {/* Name */}
          <div className="flex items-center w-full mt-8 border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex items-center w-full mt-5 border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6">
            <input
              email="email"
              type="email"
              placeholder="Your Email"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="flex items-center w-full mt-5 border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6">
            <input
              name="phone"
              type="tel"
              placeholder="Your Phone"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <textarea
            name="textarea"
            placeholder="Your Message"
            rows="4"
            className="w-full mt-5 border border-gray-300/60 rounded-xl p-4 text-gray-500/80 placeholder-gray-500/80 outline-none text-sm resize-none"
            required
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>

          <p className="text-gray-500/90 text-sm mt-4">
            We will get back to you shortly 😊
          </p>
        </form>
      </div>
    </div>
  );
}
