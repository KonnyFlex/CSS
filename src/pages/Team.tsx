import React from 'react';

export function TheTeam() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Meet Our Experts</h1>
          <p className="mt-4 text-xl text-gray-300">
            Entrepreneurship · Innovation · Sustainability
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Member 1 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Konstantin Remke – PhD Candidate | Digital Technologies & Circular Economy
            </h2>
            <p className="text-gray-700 text-lg">
              Konstantin is a third-year PhD candidate at ESCP Business School in Berlin, specializing in entrepreneurship,
              innovation, and digital transformation. His research explores business model and system innovation in the circular
              economy, powered by AI and digital technologies.
            </p>
            <p className="mt-2 text-gray-700 text-lg">
              He holds a Master of Science in Sustainability Entrepreneurship and Innovation from ESCP and a Bachelor of Science from
              the Hamburg School of Business Administration. Konstantin is a certified banker with 7+ years of professional experience
              at Hamburger Sparkasse, Capgemini Invent, ICN Business School, Collaborating Centre on Sustainable Consumption and Production,
              and more.
            </p>
          </div>

          {/* Member 2 */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Henry Willem Müller – PhD Candidate | Sustainable Startups & Circular Economy
            </h2>
            <p className="text-gray-700 text-lg">
              Henry is a third-year PhD candidate at the University of St. Gallen, researching sustainable entrepreneurship, the circular economy,
              and greenhouse gas reduction. His dissertation investigates the role of startups in systemic transformation.
            </p>
            <p className="mt-2 text-gray-700 text-lg">
              He holds a Master in Management from the Stockholm School of Economics and a Bachelor of Science from Kühne Logistics University.
              Henry brings 4+ years of experience from PwC, UNITY, Amazon, and circular startup Tiptapp. He’s also a co-founder of fortyfour and
              a teaching assistant at the University of St. Gallen.
            </p>
          </div>
        </div>
      </section>

      {/* Why Follow */}
      <section className="bg-gray-100 py-12 mt-6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Follow Our Experts?</h3>
          <p className="text-lg text-gray-700">
            Our interdisciplinary team combines expertise in entrepreneurship, AI, sustainability, circular economy,
            and digital business. Stay connected to discover cutting-edge research, future trends, and practical insights
            that drive real-world impact.
          </p>
        </div>
      </section>
    </div>
  );
}