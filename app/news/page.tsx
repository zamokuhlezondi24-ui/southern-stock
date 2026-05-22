export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            News & Updates
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Stay updated with Southern Stock Technology Solutions,
            company developments, partnerships, project milestones,
            technology insights, and industry trends.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-xl transition">

            <div className="bg-blue-600 h-2"></div>

            <div className="p-8">
              <p className="text-sm text-blue-600 font-semibold mb-3">
                Company Update
              </p>

              <h2 className="text-2xl font-bold mb-4">
                Southern Stock Expands Technology Services
              </h2>

              <p className="text-gray-600 leading-7">
                Southern Stock continues expanding its enterprise
                technology services including software engineering,
                cybersecurity, cloud systems, and PoC development.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-xl transition">

            <div className="bg-blue-600 h-2"></div>

            <div className="p-8">
              <p className="text-sm text-blue-600 font-semibold mb-3">
                Industry Insight
              </p>

              <h2 className="text-2xl font-bold mb-4">
                Healthcare & Fintech Innovation
              </h2>

              <p className="text-gray-600 leading-7">
                Southern Stock continues supporting digital
                transformation through healthcare systems,
                fintech solutions, and scalable infrastructure.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-xl transition">

            <div className="bg-blue-600 h-2"></div>

            <div className="p-8">
              <p className="text-sm text-blue-600 font-semibold mb-3">
                Coming Soon
              </p>

              <h2 className="text-2xl font-bold mb-4">
                More Updates On The Way
              </h2>

              <p className="text-gray-600 leading-7">
                Follow Southern Stock as we continue building
                innovative technology solutions and strategic
                partnerships.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}