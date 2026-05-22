export default function ProjectsPage() {
  return (
    <main className="premium-page">

      <section className="page-hero">
        <div className="hero-content">

          <span className="hero-tag">
            FEATURED PROJECTS
          </span>

          <h1>
            Innovation &
            <br />
            Technology
          </h1>

          <p>
            Southern Stock develops scalable
            software, enterprise systems and
            MVP platforms for business growth.
          </p>

        </div>
      </section>

      <section className="content-section">
        <div className="card-grid">

          <div className="premium-card">
            <h2>Healthcare Platform</h2>
            <p>
              Secure digital patient platform
              and healthcare systems.
            </p>
          </div>

          <div className="premium-card">
            <h2>Fintech MVP</h2>
            <p>
              MVP development for financial
              technology innovation.
            </p>
          </div>

          <div className="premium-card">
            <h2>Enterprise Software</h2>
            <p>
              Scalable enterprise systems
              for business automation.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}