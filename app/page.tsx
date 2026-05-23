import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">

      {/* NAVBAR */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LOGO */}
          <div className="flex items-center gap-2 md:gap-4">
            <img
             src="/logo.png"
             alt="Southern Stock Logo"
             className="w-12 md:w-20 h-auto object-contain"
           />

            <div>
              <h1 className="text-lg md:text-2xl font-bold text-black tracking-wide">
                SOUTHERN STOCK
              </h1>
              <p className="text-blue-600 text-sm">
                Technology Solutions
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-gray-700 font-medium text-lg">

  <a href="#home" className="hover:text-blue-600 transition">
    Home
  </a>

  <a href="#services" className="hover:text-blue-600 transition">
    Services
  </a>

  <a href="#industries" className="hover:text-blue-600 transition">
    Industries
  </a>

  <a href="#projects" className="hover:text-blue-600 transition">
    Projects
  </a>

  <a href="#partners" className="hover:text-blue-600 transition">
    Partners
  </a>

  <a href="#about" className="hover:text-blue-600 transition">
    About Us
  </a>

  <a href="#contact" className="hover:text-blue-600 transition">
    Contact
  </a>

</nav>

          {/* BUTTON */}
          <a
  href="#contact"
  className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg w-full md:w-auto text-center"
>
  Let's Talk →
</a>
        </div>
      </header>
        {/* HERO */}
<section 
  id="home"
  className="relative min-h-[720px] overflow-hidden"
>

  {/* MOVING BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
    style={{
      backgroundImage: "url('/hero-bg.jpg')",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-blue-950/55"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-[1400px] mx-auto px-16 h-[720px] grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div className="text-white max-w-[620px]">
      <p className="uppercase tracking-[4px] text-blue-300 text-sm mb-5">
        TECHNOLOGY THAT DRIVES BUSINESS
      </p>

      <h1 className="text-5xl md:text-8xl font-bold leading-tight">
        Performance.
        <br />
        Security.
        <br />
        Growth.
      </h1>

      <p className="text-lg text-gray-200 mb-8 leading-8">
        Southern Stock delivers enterprise IT solutions, cybersecurity,
        networking, cloud infrastructure, software development and
        managed services that help businesses scale with confidence.
      </p>

      <div className="flex gap-4">
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
        >
          Explore Solutions →
        </a>

        <a
          href="#contact"
          className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
        >
          Let&apos;s Talk
        </a>
      </div>
    </div>

    {/* RIGHT SIDE CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 translate-y-[-20px]">

      <a 
        href="/services/cloud-infrastructure" 
         className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[28px] p-8 text-white hover:scale-105 transition">
        <h3 className="text-3xl font-bold mb-4">
          Cloud & Infrastructure
        </h3>

        <p className="text-gray-200 mb-6">
          Modern, scalable and secure cloud solutions.
        </p>

        <span className="text-3xl">→</span>
      </a>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[28px] p-8 text-white hover:scale-105 transition mt-10">
        <h3 className="text-3xl font-bold mb-4">
          Cyber Security
        </h3>

        <p className="text-gray-200 mb-6">
          Advanced protection for business systems.
        </p>

        <span className="text-3xl">→</span>
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[28px] p-8 text-white hover:scale-105 transition">
        <h3 className="text-3xl font-bold mb-4">
          Networking
        </h3>

        <p className="text-gray-200 mb-6">
          Enterprise networking infrastructure.
        </p>

        <span className="text-3xl">→</span>
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[28px] p-8 text-white hover:scale-105 transition mt-10">
        <h3 className="text-3xl font-bold mb-4">
          Managed Services
        </h3>

        <p className="text-gray-200 mb-6">
          24/7 support and monitoring.
        </p>

        <span className="text-3xl">→</span>
      </div>

    </div>
  </div>
</section>
{/* TRUSTED BRANDS */}
<section 
  id="partners"
  className="bg-white py-16"
>

  <div className="max-w-[1400px] mx-auto px-10">

    <div className="flex items-center gap-6 mb-10">
      <div className="h-[1px] flex-1 bg-gray-300"></div>

      <p className="text-blue-700 font-semibold tracking-[3px] uppercase text-sm">
        Trusted By Global Technology Leaders
      </p>

      <div className="h-[1px] flex-1 bg-gray-300"></div>
    </div>

    {/* LOGOS */}
    <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center mb-12">

      <img src="/microsoft.png" alt="Microsoft" className="h-10 object-contain" />
      <img src="/dell.png" alt="Dell" className="h-10 object-contain" />
      <img src="/aws.png" alt="AWS" className="h-10 object-contain" />
      <img src="/fortinet.png" alt="Fortinet" className="h-10 object-contain" />
      <img src="/cisco.png" alt="Cisco" className="h-10 object-contain" />
      <img src="/nvidia.png" alt="Nvidia" className="h-10 object-contain" />
      <img src="/intel.png" alt="Intel" className="h-10 object-contain" />
      <img src="/ibm.png" alt="IBM" className="h-10 object-contain" />

    </div>

    {/* COMPLIANCE */}
<div className="border rounded-[30px] p-8 grid md:grid-cols-5 gap-6 bg-white shadow-sm">

  {/* Proudly SA */}
  <div className="flex gap-4 items-start border-r pr-4">
    <img
      src="/proudlysa.png"
      alt="Proudly SA"
      className="w-16 h-16 object-contain"
    />

    <div>
      <h3 className="font-bold text-lg">
        Proudly South African
      </h3>

      <p className="text-gray-600 text-sm">
        Building solutions. Empowering our nation.
      </p>
    </div>
  </div>

  {/* CSD */}
  <div className="flex gap-4 items-start border-r pr-4">
    <img
      src="/csd.png"
      alt="CSD"
      className="w-16 h-16 object-contain"
    />

    <div>
      <h3 className="font-bold text-lg">
        CSD Registered
      </h3>

      <p className="text-gray-600 text-sm">
        Central Supplier Database compliant.
      </p>
    </div>
  </div>

  {/* FIC */}
  <div className="flex gap-4 items-start border-r pr-4">
    <img
      src="/fic.png"
      alt="FIC"
      className="w-16 h-16 object-contain"
    />

    <div>
      <h3 className="font-bold text-lg">
        FIC Compliant
      </h3>

      <p className="text-gray-600 text-sm">
        Financial Intelligence Centre compliant.
      </p>
    </div>
  </div>

  {/* SARS */}
  <div className="flex gap-4 items-start border-r pr-4">
    <img
      src="/sars.png"
      alt="SARS"
      className="w-16 h-16 object-contain"
    />

    <div>
      <h3 className="font-bold text-lg">
        SARS Tax Compliant
      </h3>

      <p className="text-gray-600 text-sm">
        South African Revenue Service compliant.
      </p>
    </div>
  </div>

  {/* POPIA */}
  <div className="flex gap-4 items-start">
    <img
      src="/popia.png"
      alt="POPIA"
      className="w-16 h-16 object-contain"
    />

    <div>
      <h3 className="font-bold text-lg">
        POPIA Compliant
      </h3>

      <p className="text-gray-600 text-sm">
        Your data. Our priority.
      </p>
    </div>
  </div>

</div>
  </div>
</section>
{/* STATS SECTION */}
<section className="bg-white py-10">

  <div className="max-w-[1400px] mx-auto px-10">

    <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-[28px] px-12 py-10 text-white">

      <div className="grid lg:grid-cols-6 gap-8 items-center">

        {/* 15+ YEARS */}
        <div className="border-r border-white/20 pr-8">
          <h2 className="text-6xl font-bold mb-2">
            15+
          </h2>

          <p className="uppercase text-sm tracking-[2px] text-blue-200">
            Years
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="lg:col-span-2 border-r border-white/20 pr-8">
          <p className="uppercase tracking-[3px] text-blue-300 text-sm mb-3">
            Specialist Experience
          </p>

          <p className="text-gray-300 leading-7">
            Over 15 years of combined specialist
            experience delivering enterprise
            technology solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            150+
          </h3>

          <p className="text-blue-200 mt-2">
            Projects Delivered
          </p>
        </div>

        {/* Satisfaction */}
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            98%
          </h3>

          <p className="text-blue-200 mt-2">
            Client Satisfaction
          </p>
        </div>

        {/* Support */}
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            24/7
          </h3>

          <p className="text-blue-200 mt-2">
            Support & Monitoring
          </p>
        </div>

      </div>

      {/* Bottom Clients */}
      <div className="flex justify-center mt-8 pt-6 border-t border-white/10">

        <div className="text-center">
          <h3 className="text-4xl font-bold">
            100+
          </h3>

          <p className="text-blue-200 mt-2">
            Enterprise Clients
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
{/* OUR SERVICES */}
<section 
  id="services"
  className="bg-white py-20"
>

  <div className="max-w-[1400px] mx-auto px-10">

    {/* Title */}
    <div className="text-center mb-14">

      <p className="uppercase tracking-[4px] text-blue-700 text-sm font-semibold">
        OUR SERVICES
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mt-3">
        Technology Solutions
      </h2>

      <p className="text-gray-500 mt-4 max-w-[700px] mx-auto">
        Enterprise-grade IT services designed to help businesses
        scale securely and efficiently.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      {/* Software Development */}
      <div className="bg-white border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

        <div className="text-blue-700 text-5xl mb-5">
          💻
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Software Development
        </h3>

        <p className="text-gray-600 leading-7">
          Custom software, websites, mobile applications
          and enterprise systems.
        </p>

        <button className="mt-6 text-blue-700 font-semibold">
          Learn More →
        </button>

      </div>

      {/* PoC Development */}
      <div className="bg-white border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

        <div className="text-blue-700 text-5xl mb-5">
          🚀
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          PoC Development
        </h3>

        <p className="text-gray-600 leading-7">
          Rapid prototype and High-fidelity PoC
          development for scalable success.
        </p>

        <button className="mt-6 text-blue-700 font-semibold">
          Learn More →
        </button>

      </div>

      {/* Cybersecurity */}
      <div className="bg-white border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

        <div className="text-blue-700 text-5xl mb-5">
          🛡️
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Cybersecurity
        </h3>

        <p className="text-gray-600 leading-7">
          Threat prevention, security testing,
          compliance and monitoring.
        </p>

        <button className="mt-6 text-blue-700 font-semibold">
          Learn More →
        </button>

      </div>

      {/* Cloud */}
      <div className="bg-white border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

        <div className="text-blue-700 text-5xl mb-5">
          ☁️
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Cloud Infrastructure
        </h3>

        <p className="text-gray-600 leading-7">
          Cloud migration, hosting,
          deployment and enterprise solutions.
        </p>

        <button className="mt-6 text-blue-700 font-semibold">
          Learn More →
        </button>

      </div>

      {/* Managed IT */}
      <div className="bg-white border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

        <div className="text-blue-700 text-5xl mb-5">
          🖥️
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Managed IT Services
        </h3>

        <p className="text-gray-600 leading-7">
          24/7 monitoring, support
          and complete IT system management.
        </p>

        <button className="mt-6 text-blue-700 font-semibold">
          Learn More →
        </button>

      </div>

    </div>

  </div>

</section>
{/* INDUSTRIES + PROJECTS */}
<section 
  id="industries"
  className="bg-[#f8fafc] py-20"
>

  <div className="max-w-[1400px] mx-auto px-10 grid lg:grid-cols-2 gap-10">

    {/* INDUSTRIES */}
    <div className="bg-white rounded-[28px] p-10 shadow-sm">

      <div id="industries" className="flex items-center gap-4 mb-10">
        <div className="h-[2px] bg-gray-200 flex-1"></div>

        <h2 className="text-blue-700 font-bold uppercase tracking-[3px] text-sm whitespace-nowrap">
          Industries We Serve
        </h2>

        <div className="h-[2px] bg-gray-200 flex-1"></div>
      </div>

      <div className="grid grid-cols-2 gap-8">

        <div>
          <div className="text-5xl mb-3">🏥</div>
          <h3 className="font-bold text-xl text-gray-900">
            Healthcare
          </h3>
          <p className="text-gray-600 mt-2">
            Secure systems and digital
            transformation for healthcare.
          </p>
        </div>

        <div>
          <div className="text-5xl mb-3">🏦</div>
          <h3 className="font-bold text-xl text-gray-900">
            Finance
          </h3>
          <p className="text-gray-600 mt-2">
            Fintech solutions, compliance
            and secure financial systems.
          </p>
        </div>

        <div>
          <div className="text-5xl mb-3">🏛️</div>
          <h3 className="font-bold text-xl text-gray-900">
            Government
          </h3>
          <p className="text-gray-600 mt-2">
            Secure infrastructure and
            digital solutions for public sector.
          </p>
        </div>

        <div>
          <div className="text-5xl mb-3">🏢</div>
          <h3 className="font-bold text-xl text-gray-900">
            Enterprise
          </h3>
          <p className="text-gray-600 mt-2">
            End-to-end IT solutions
            for large organizations.
          </p>
        </div>

      </div>

      <button className="mt-10 text-blue-700 font-semibold">
        View All Industries →
      </button>

    </div>

    {/* FEATURED PROJECTS */}
    <div 
      id="projects"
      className="bg-white rounded-[28px] p-10 shadow-sm"
    >

      <div className="flex items-center gap-4 mb-10">
        <div className="h-[2px] bg-gray-200 flex-1"></div>

        <h2 className="text-blue-700 font-bold uppercase tracking-[3px] text-sm whitespace-nowrap">
          Featured Projects
        </h2>

        <div className="h-[2px] bg-gray-200 flex-1"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {/* Project 1 */}
        <div className="overflow-hidden rounded-[20px] border border-gray-200 hover:shadow-xl transition">

          <img
            src="/healthcare.jpg"
            alt="Healthcare"
           className="h-[180px] w-full object-cover rounded-t-[20px]"
          />

          <div className="p-5">
            <h3 className="font-bold text-lg">
              Healthcare Platform
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Secure patient management
              and digital healthcare solution.
            </p>

            <button className="text-blue-700 font-semibold mt-4">
              View Case Study →
            </button>
          </div>

        </div>

        {/* Project 2 */}
        <div className="overflow-hidden rounded-[20px] border border-gray-200 hover:shadow-xl transition">

          <img
            src="/fintech.jpg"
            alt="Fintech"
            className="h-[180px] w-full object-cover"
          />

          <div className="p-5">
            <h3 className="font-bold text-lg">
              Fintech PoC
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Scalable fintech PoC
              for investment management.
            </p>

            <button className="text-blue-700 font-semibold mt-4">
              View Case Study →
            </button>
          </div>

        </div>

        {/* Project 3 */}
        <div className="overflow-hidden rounded-[20px] border border-gray-200 hover:shadow-xl transition">

          <img
            src="/cloud.jpg"
            alt="Cloud"
            className="h-[180px] w-full object-cover"
          />

          <div className="p-5">
            <h3 className="font-bold text-lg">
              Cloud Migration
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Enterprise cloud migration
              and infrastructure modernization.
            </p>

            <button className="text-blue-700 font-semibold mt-4">
              View Case Study →
            </button>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ABOUT SOUTHERN STOCK */}
<section 
  id="about"
  className="py-20 bg-white"
>

  <div className="max-w-[1400px] mx-auto px-10">

    <div  id="about" className="bg-gradient-to-r from-[#021B4D] to-[#063BBD] rounded-[32px] overflow-hidden grid lg:grid-cols-3">

      {/* LEFT IMAGE */}
      <div className="lg:col-span-1 flex items-center justify-center p-8 bg-[#021B4D]">

  <img
    src="/office.jpg"
    alt="Southern Stock Office"
    className="w-[90%] h-[320px] object-cover rounded-[24px] shadow-2xl"
  />

</div>

      {/* MIDDLE CONTENT */}
      <div className="lg:col-span-1 p-12 text-white">

        <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold mb-4">
          About Southern Stock
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Enterprise Technology Solutions
        </h2>

        <p className="text-gray-300 leading-8 mb-8">
          Southern Stock Technology Solutions is a South African IT company
          focused on software development, PoC building, cybersecurity,
          enterprise systems, cloud infrastructure and managed IT services.
          We help businesses scale securely through modern technology.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-5">

          <div>
            <h3 className="text-3xl font-bold text-white">
              2021
            </h3>

            <p className="text-gray-300">
              Founded
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              15+
            </h3>

            <p className="text-gray-300">
              Specialist Engineers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              150+
            </h3>

            <p className="text-gray-300">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              SA
            </h3>

            <p className="text-gray-300">
              Proudly South African
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT CTA */}
      <div className="bg-[#0A4DFF] p-12 flex flex-col justify-center text-white">

        <h2 className="text-4xl font-bold mb-5">
          Let’s Build Something Great
        </h2>

        <p className="text-blue-100 leading-8 mb-8">
          Partner with Southern Stock for secure,
          scalable and innovative technology solutions.
        </p>

        <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl w-fit hover:scale-105 transition">
          Let’s Talk →
        </button>

      </div>

    </div>

  </div>

</section>

{/* CONTACT SECTION */}
<section
  id="contact"
  className="py-24 bg-gray-50"
>
  <div  id="contact" className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-14">
      <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
        CONTACT US
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mt-3">
        Let’s Build Something Great
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        Have a project in mind? Contact Southern Stock Technology Solutions.
      </p>
    </div>

    <div className="bg-white rounded-[30px] shadow-xl p-10 border border-gray-100">

      <form className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="text"
          placeholder="Company Name"
          className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
        />

        <textarea
          placeholder="Tell us about your project..."
          rows={6}
          className="md:col-span-2 border border-gray-300 rounded-xl p-4 outline-none focus:border-blue-600"
        />

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold text-lg"
        >
          Submit Inquiry →
        </button>

      </form>
    </div>
  </div>
</section>
{/* FOOTER */}
<footer 
  id="contact"
  className="bg-[#020b24] text-white pt-14 pb-6 mt-16"
>
  <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] gap-10 items-start">
    {/* LOGO + DESCRIPTION */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
          <img src="/logo.png" alt="Southern Stock Logo" className="w-full h-full object-contain" />
        </div>

        <div>
          <h2 className="font-bold text-xl">
            SOUTHERN STOCK
          </h2>
          <p className="text-sm text-blue-300">
            Technology Solutions
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-7">
        Premium IT solutions. Secure. Scalable.
        Innovative. Proudly South African.
      </p>

     
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
        Quick Links
      </h3>
       <ul className="space-y-3 text-gray-400">

  <li>
    <a href="#home" className="hover:text-white cursor-pointer">
      Home
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-white cursor-pointer">
      Services
    </a>
  </li>

  <li>
    <a href="#industries" className="hover:text-white cursor-pointer">
      Industries
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-white cursor-pointer">
      Projects
    </a>
  </li>

  <li>
    <a href="#partners" className="hover:text-white cursor-pointer">
      Partners
    </a>
  </li>

</ul>
    </div>

    {/* COMPANY */}
    <div>
      <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
        Company
      </h3>
       <ul className="space-y-3 text-gray-400">

  <li>
    <a href="#about" className="hover:text-white cursor-pointer">
      About Us
    </a>
  </li>

  <li>
    <a href="/team" className="hover:text-white cursor-pointer">
      Our Team
    </a>
  </li>

  <li>
    <a href="/careers" className="hover:text-white cursor-pointer">
      Careers
    </a>
  </li>

  <li>
    <a href="/news" className="hover:text-white cursor-pointer">
      News
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-white cursor-pointer">
      Contact
    </a>
  </li>

</ul>
    </div>
  {/* SERVICES */}
  <div>
    <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
      Services
    </h3>

   <ul className="space-y-3 text-gray-400">

  <li>
    <a href="#services" className="hover:text-white transition">
      Cybersecurity
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-white transition">
      Cloud Solutions
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-white transition">
      Software Development
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-white transition">
      Managed IT Services
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-white transition">
      PoC Development
    </a>
  </li>

</ul>
  </div>

  {/* CONTACT */}
  <div className="justify-self-end text-left">
    <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
      Contact Us
    </h3>

    <div className="space-y-4 text-gray-400 text-sm">
      <p>📧 info@southernstock.co.za</p>
      <p>📍 South Africa</p>
    </div>

    <a
      href="#contact"
      className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-semibold"
    >
      Schedule a Call →
    </a>
  </div>
  </div>

{/* BOTTOM BAR */}
  <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
    © 2026 Southern Stock (Pty) Ltd. All Rights Reserved.
    <span className="mx-2">|</span>
    
    <a href="/privacy-policy" className="hover:text-white">
  Privacy Policy
</a>

    <span className="mx-2">|</span>

    <a href="/terms" className="hover:text-white">
      Terms & Conditions
    </a>
  </div>
</footer>
    </main>
  );
}