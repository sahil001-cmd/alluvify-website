import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gray-900 text-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Alluvify</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#solutions" className="hover:underline">Solutions</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Tech That Empowers Change</h2>
        <p className="text-lg mb-6">Custom-built, open-source solutions to accelerate growth and impact for businesses of all sizes</p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      <section id="services" className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">End-to-End Development</h3>
              <p>Build MVPs, dashboards, or automation tools from scratch with rapid iteration.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Open Source Tech Consulting</h3>
              <p>Design modern, cost-effective stacks free from license bloat or vendor lock-in.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Scalability and Support</h3>
              <p>Architecture and optimization to grow with demand, without tech debt buildup.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">We Solve Real Problems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-2">For Growing Enterprises</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Build MVPs with speed and efficiency</li>
                <li>Overcome tech talent shortage with on-demand expertise</li>
                <li>Choose the right tech stack with zero vendor lock-in</li>
                <li>Fix scalability and performance bottlenecks early</li>
                <li>Save cost by using free, open-source alternatives</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-2">For Purpose-Driven Organizations</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Streamline operations and reporting workflows</li>
                <li>Digital transformation on a tight budget</li>
                <li>Improve stakeholder transparency with dashboards & metrics</li>
                <li>Build community platforms or tools for outreach</li>
                <li>Empower staff with intuitive, low-maintenance tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Clients</h2>
          <div className="flex justify-center items-center gap-8">
            <a href="https://thesama.in" target="_blank" rel="noopener noreferrer">
              <img
                src="/thesama-logo.png"
                alt="thesama.in logo"
                className="h-24 object-contain bg-white rounded shadow p-2"
                style={{ maxWidth: '220px' }}
              />
            </a>
            <a href="https://navgurukul.org" target="_blank" rel="noopener noreferrer">
              <img
                src="/Navgurukul-logo.png"
                alt="Navgurukul logo"
                className="h-24 object-contain bg-white rounded shadow p-2"
                style={{ maxWidth: '220px' }}
              />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Alluvify?</h2>
          <p>We're engineers, strategists, and product thinkers united by one goal: to make great technology accessible to everyone. Businesses of all sizes deserve tools as powerful as their mission — and we build exactly that.</p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-gray-100">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Start Your Project</h2>
          <form action="https://formspree.io/f/mdkzpvdg" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 border rounded" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 border rounded" />
            <textarea name="message" placeholder="What challenge can we help you with?" required className="w-full px-4 py-2 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Alluvify</p>
        <p><a href="/" className="text-gray-400 hover:underline">Privacy Policy</a></p>
      </footer>
    </div>
  );
}