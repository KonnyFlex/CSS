import React from 'react';

export function OffersAndPricing() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Offers & Pricing</h1>
          <p className="mt-4 text-xl text-green-100">
            Unlock Circular Innovation for Your Business
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* Consulting Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tailored Consulting for Circular Business Transformation
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We provide expert consulting services to help businesses design and optimize circular systems—including products,
              services, business models, and ecosystems. Whether you're starting fresh or refining an existing offering, we guide
              your path to sustainable growth.
            </p>
          </div>

          {/* Approach Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-green-700">🔍 Circularity Potential Analysis</h3>
              <p className="text-gray-700">Identify opportunities for circularity across your business ecosystem.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-green-700">🛠 CSS Tool Implementation</h3>
              <p className="text-gray-700">Leverage our proprietary Circular Systems Sandbox to design and test your systems.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-green-700">♻ Product & Business Model Innovation</h3>
              <p className="text-gray-700">Develop holistic circular offerings across services, value chains, and markets.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-green-700">📊 Data-Driven Decision Making</h3>
              <p className="text-gray-700">Use scientific insights to make sustainability measurable and actionable.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-green-700">🚀 Scalable & Future-Proof Strategies</h3>
              <p className="text-gray-700">Align with ESG goals and circular economy frameworks for long-term success.</p>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">💼 Expert Consulting Services</h2>
            <p className="text-xl font-bold text-green-800 mb-2">€2,000 per day</p>
            <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
              <li>Designed for corporations, SMEs, and startups</li>
              <li>Research-backed, strategic consulting</li>
              <li>Customized support tailored to your goals</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Services</h3>
            <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
              <li>📈 Circular Business Strategy Workshops</li>
              <li>🔄 Lifecycle & Circularity Impact Assessments</li>
              <li>💡 Circular Innovation Sprints</li>
              <li>🤝 Ongoing Advisory & Implementation Support</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-100 py-8 px-6 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="list-disc mx-auto text-left max-w-2xl text-gray-700 text-lg space-y-1">
              <li>Expert-Led Approach – Led by PhD researchers and industry specialists</li>
              <li>Proven Methodology – Backed by scientific research and real-world case studies</li>
              <li>Holistic Perspective – From product design to ecosystem transformation</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <h4 className="text-xl font-bold text-green-800 mb-2">💡 Ready to unlock the power of circularity?</h4>
            <p className="text-lg text-gray-700">Contact us today to discuss how we can future-proof your business with circular innovation! 🚀</p>
          </div>
        </div>
      </section>
    </div>
  );
}