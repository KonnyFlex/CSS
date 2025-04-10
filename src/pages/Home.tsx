import React from 'react';
import { ArrowRight, TreePine, Recycle, LineChart, ExternalLink } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Design sustainable products
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            We help businesses design their product for a sustainable and circular tomorrow through expert consulting and innovative frameworks.
          </p>
        </div>
      </section>

      {/* Circular Innovation Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Driving Circular Innovation for a Sustainable Future
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            At <strong>Teal & Wheel Systems</strong>, we empower businesses to design, optimize, and implement circular value creation systems.
            Our research-backed <strong>Circular Systems Sandbox (CSS)</strong> tool helps companies transition from linear to circular models,
            integrating products, services, business models, and ecosystems to maximize sustainability and business success.
          </p>

          <div className="text-left space-y-4 max-w-3xl mx-auto text-gray-800">
            <h3 className="text-xl font-semibold">What We Offer</h3>
            <ul className="space-y-2 pl-5 list-disc">
              <li><strong>✔ Consulting & Advisory</strong> – Expert circular business transformation services with data-driven insights and strategic guidance.</li>
              <li><strong>✔ Cutting-Edge Research</strong> – Backed by scientific publications in <em>Lecture Notes in Computer Science</em>.</li>
              <li><strong>✔ Industry & Academic Partnerships</strong> – Collaborations with STAR Centre, Business Model Toolbox, DS:E, and others.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Explore Our Expertise</h3>
            <ul className="space-y-2">
              <li>🔹 <a href="/about" className="text-green-600 hover:underline">About Us</a> – Meet the experts behind Teal & Wheel Systems and discover our mission.</li>
              <li>🔹 <a href="/tool" className="text-green-600 hover:underline">The Tool</a> – Learn how our CSS tool drives systemic change in circular business models.</li>
              <li>🔹 <a href="/offers" className="text-green-600 hover:underline">Offers & Pricing</a> – Explore our tailored consulting services.</li>
              <li>🔹 <a href="/partners" className="text-green-600 hover:underline">Our Partners</a> – Discover the institutions and platforms supporting our work.</li>
              <li>🔹 <a href="/publications" className="text-green-600 hover:underline">Publications</a> – Read our latest research and academic contributions.</li>
            </ul>

            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                🚀 Join us in shaping a circular economy! Contact us today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported By Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Supported by
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {["img/design_challenge.png", "img/design_challenge.png", "img/design_challenge.png", "img/design_challenge.png"].map((index) => (
              <div
                key={index}
                className="col-span-1 flex justify-center items-center"
              >
                <div className="h-20 w-full rounded-md flex items-center justify-center">
                  <img src={`/img/design_challenge.png`} alt="Logo" className="w-full h-full object-contain"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* ...existing services, Miro integration, and CTA section continue unchanged... */}
    </div>
  );
}