export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-8">
            Southern Stock Technology Solutions is powered by a multidisciplinary
            team of experienced technology professionals, system engineers,
            software developers, compliance specialists, and strategic advisors
            committed to delivering secure, scalable, and innovative enterprise
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Enterprise Engineering
            </h2>

            <p className="text-gray-600 leading-7">
              Expertise in enterprise systems, fintech platforms,
              cloud infrastructure, scalable software engineering,
              mobile application systems, and proof-of-concept
              (PoC) technology implementation.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Healthcare Technology
            </h2>

            <p className="text-gray-600 leading-7">
              Experience supporting healthcare technology platforms,
              digital patient systems, medical workflows,
              healthcare accessibility, and secure digital
              transformation initiatives.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Compliance & Strategic Leadership
            </h2>

            <p className="text-gray-600 leading-7">
              Strong capabilities in governance, project
              coordination, compliance oversight, enterprise
              planning, and business technology strategy.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}