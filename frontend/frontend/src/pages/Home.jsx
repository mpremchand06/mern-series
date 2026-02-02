export default function Home() {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Build Amazing Websites with{" "}
            <span className="text-indigo-500">Modern UI</span>
          </h1>
          <p className="text-gray-500 mt-6 text-lg">
            Learn React, Tailwind CSS and MERN Stack by building beautiful
            projects. Improve your frontend skills and get job ready.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="hero"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
