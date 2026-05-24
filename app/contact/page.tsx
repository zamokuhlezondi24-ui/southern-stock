"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="premium-page">
      <section className="page-hero">
        <div className="hero-content">
          <span className="hero-tag">CONTACT US</span>

          <h1>
            Let’s Build
            <br />
            Something Great
          </h1>

          <p>
            Ready to modernize your business
            with premium IT solutions?
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="premium-card large-card">
          <h2>Contact Information</h2>

          <p>
            Email:
            <br />
            info@southernstock.co.za
          </p>

          <p>South Africa</p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}