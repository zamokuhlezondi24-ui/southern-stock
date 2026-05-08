export default function Home() {
  return (
    <main className="min-h-screen bg-[#071028] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 border-b border-gray-800 bg-[#071028]/90 backdrop-blur-md">
       <div className="logo">
         <img src="/logo.png2.png" alt="Southern Stock Logo" />
       </div>

        <div className="flex gap-8 text-sm">

          <a
            href="#home"
            className="hover:text-yellow-500 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-yellow-500 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-yellow-500 transition"
          >
            Services
          </a>

          <a
            href="#industries"
            className="hover:text-yellow-500 transition"
          >
            Industries
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-500 transition"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative px-10 py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,16,40,0.88), rgba(7,16,40,0.92)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest mb-4">
            Southern Stock Pty Ltd
          </p>

          <h1 className="text-7xl font-bold leading-tight max-w-5xl">
            Innovative IT Solutions That Drive Your Business Forward
          </h1>

          <p className="text-gray-300 mt-8 text-xl max-w-2xl leading-relaxed">
            Outsourcing software development experts delivering
            world-class websites, mobile apps, cybersecurity
            and enterprise IT solutions globally.
          </p>

          <div className="flex gap-6 mt-10">

            <a
              href="#services"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Our Services
            </a>

            <a
              href="#about"
              className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
            >
              About Us
            </a>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-16 bg-[#0c1735]">

        <div className="border border-gray-800 p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-yellow-500">20+</h2>
          <p className="text-gray-300 mt-2">Years IT Experience</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-yellow-500">100+</h2>
          <p className="text-gray-300 mt-2">Projects Delivered</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-yellow-500">50+</h2>
          <p className="text-gray-300 mt-2">Global Clients</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-yellow-500">2021</h2>
          <p className="text-gray-300 mt-2">Established</p>
        </div>

      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="px-10 py-24 bg-[#071028]"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest mb-4">
            Our Core Services
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Comprehensive IT Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#0c1735] p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                Website Development
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Professional modern websites built for businesses,
                government institutions and startups.
              </p>
            </div>

            <div className="bg-[#0c1735] p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                Software Development
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Enterprise software systems, dashboards and custom
                business automation solutions.
              </p>
            </div>

            <div className="bg-[#0c1735] p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                Mobile App Development
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Android and iOS applications with scalable and secure
                cloud-based architecture.
              </p>
            </div>

            <div className="bg-[#0c1735] p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                Cybersecurity
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Antivirus deployment, endpoint security and advanced
                cybersecurity protection services.
              </p>
            </div>

            <div className="bg-[#0c1735] p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                IT Outsourcing
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Dedicated remote developers and outsourced IT teams
                for scalable business operations.
              </p>
            </div>

            <div className="bg-[#0c1735] p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                IT Training
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Professional IT training and technology education
                services for individuals and businesses.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="px-10 py-24 bg-[#0c1735]"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-yellow-500 uppercase tracking-widest mb-4">
              About Southern Stock
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Delivering Excellence Through Technology
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Southern Stock (Pty) Ltd is a South African-based IT outsourcing
              and software development company established in May 2021.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We partner with experienced software engineers and IT specialists
              from India with over 20 years of combined industry experience
              delivering secure, scalable and innovative digital solutions.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to help businesses, startups and government
              institutions modernize operations through world-class technology.
            </p>

          </div>

          <div className="bg-[#071028] border border-gray-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8 text-yellow-500">
              Why Choose Us
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold text-xl mb-2">
                  20+ Years Experience
                </h4>

                <p className="text-gray-300">
                  Skilled developers with global enterprise experience.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2">
                  Global IT Partnership
                </h4>

                <p className="text-gray-300">
                  South African leadership partnered with expert Indian developers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2">
                  Secure & Scalable
                </h4>

                <p className="text-gray-300">
                  Enterprise-level security and scalable modern systems.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES SECTION */}
      <section
        id="industries"
        className="px-10 py-24 bg-[#071028]"
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-yellow-500 uppercase tracking-widest mb-4">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Technology Solutions Across Multiple Industries
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#0c1735] border border-gray-800 rounded-2xl p-10 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Finance & FinTech
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Secure financial systems, fintech platforms and digital payment solutions.
              </p>
            </div>

            <div className="bg-[#0c1735] border border-gray-800 rounded-2xl p-10 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Education & Training
              </h3>

              <p className="text-gray-300 leading-relaxed">
                E-learning systems, student portals and professional IT training services.
              </p>
            </div>

            <div className="bg-[#0c1735] border border-gray-800 rounded-2xl p-10 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Government
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Digital transformation systems and secure government IT infrastructure.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="px-10 py-24 bg-[#0c1735]"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-yellow-500 uppercase tracking-widest mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Let’s Build The Future Together
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Contact Southern Stock for professional software development,
              cybersecurity, IT outsourcing and enterprise technology solutions.
            </p>

          </div>

          <div className="bg-[#071028] border border-gray-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0c1735] border border-gray-700 rounded-lg px-5 py-4 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0c1735] border border-gray-700 rounded-lg px-5 py-4 text-white outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-[#0c1735] border border-gray-700 rounded-lg px-5 py-4 text-white outline-none"
              ></textarea>

              <button
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition w-full"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#071028] border-t border-gray-800 px-10 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold text-yellow-500">
              SOUTHERN STOCK
            </h2>

            <p className="text-gray-400 mt-2">
              Innovative IT Solutions For Modern Businesses.
            </p>

          </div>

          <div className="text-gray-400 text-sm">
            © 2026 Southern Stock (Pty) Ltd. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}