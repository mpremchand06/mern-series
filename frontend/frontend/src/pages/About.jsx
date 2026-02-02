// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
//   )
// }

// export default About
export default function About() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="About us"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-indigo-500">Us</span>
          </h2>

          <p className="text-gray-500 mt-6">
            We are a team of passionate developers who help beginners and
            professionals build modern web applications using the MERN stack.
            Our goal is to make learning web development simple, practical and
            effective.
          </p>

          <p className="text-gray-500 mt-4">
            From frontend UI design to full stack deployment, we guide you
            through every step so you can become confident in building real
            world projects.
          </p>

          <div className="mt-8 flex gap-6">
            <div>
              <h3 className="text-3xl font-bold text-indigo-500">100+</h3>
              <p className="text-gray-500">Projects Built</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-500">50+</h3>
              <p className="text-gray-500">Happy Students</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-500">10+</h3>
              <p className="text-gray-500">Expert Mentors</p>
            </div>
          </div>

          <button className="mt-10 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
