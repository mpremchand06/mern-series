export default function Services() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-indigo-500">Services</span>
          </h2>
          <p className="text-gray-500 mt-4">
            We provide everything you need to build modern web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg mb-6 text-xl">
              💻
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Frontend Development
            </h3>
            <p className="text-gray-500 mt-3">
              We create responsive and beautiful UI using React and Tailwind CSS.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg mb-6 text-xl">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Backend Development
            </h3>
            <p className="text-gray-500 mt-3">
              Powerful APIs built with Node.js, Express and MongoDB.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg mb-6 text-xl">
              🚀
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Full Stack Projects
            </h3>
            <p className="text-gray-500 mt-3">
              Complete MERN stack applications from idea to deployment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
