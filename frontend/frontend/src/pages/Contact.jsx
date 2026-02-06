import { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: ""
        });
        const data = await response.json();
        console.log("Contact Form Submitted Successfully", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col items-center"
        >
          <h2 className="text-4xl font-medium">Contact Us</h2>
          <p className="text-sm text-gray-500 mt-3">
            We would love to hear from you
          </p>

          <input
            name="username"
            value={contact.username}
            onChange={handleChange}
            placeholder="Your Name"
            className="mt-8 w-full h-12 pl-6 border rounded-full outline-none"
            required
          />

          <input
            name="email"
            type="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="mt-5 w-full h-12 pl-6 border rounded-full outline-none"
            required
          />

          <textarea
            name="message"
            value={contact.textarea}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="mt-5 w-full border rounded-xl p-4 outline-none resize-none"
            required
          />

          <button
            type="submit"
            className="mt-8 w-full h-11 bg-indigo-500 text-white rounded-full"
          >
            Send Message
          </button>

          <p className="text-sm text-gray-500 mt-4">
            We will get back to you shortly 😊
          </p>
        </form>
      </div>
    </div>
  );
}
