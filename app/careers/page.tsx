export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Careers at Southern Stock
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Join a growing technology company focused on software
            engineering, cybersecurity, cloud infrastructure,
            enterprise systems, and Proof-of-Concept (PoC)
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 border hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Cybersecurity Specialist
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Help secure enterprise systems through threat
              monitoring, vulnerability testing, risk management,
              compliance assessments, and cybersecurity planning.
            </p>

            <div className="text-sm font-semibold text-blue-600">
              Full-Time • South Africa
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Cloud Engineer
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Design, deploy, and maintain cloud infrastructure,
              migration systems, hosting environments, and scalable
              enterprise cloud solutions.
            </p>

            <div className="text-sm font-semibold text-blue-600">
              Full-Time • Hybrid
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              UI/UX Designer
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Create intuitive user experiences for enterprise
              web and mobile applications with modern,
              user-centered design.
            </p>

            <div className="text-sm font-semibold text-blue-600">
              Contract • Flexible
            </div>
          </div>

        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Interested in joining Southern Stock?
          </p>

          <a
            href="mailto:info@southernstock.co.za"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Apply via Email →
          </a>
        </div>

      </div>
    </main>
  );
}