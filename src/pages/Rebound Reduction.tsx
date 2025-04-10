import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CircularEconomyRebound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Circular Economy Rebound Reduction
          </h1>
          <p className="mt-4 text-xl text-green-100">
            The CSS Tool – Enabling Circular Systems While Preventing Rebound Effects
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800">
          {/* Overview */}
          <div>
            <p className="text-lg mb-4">
              The <strong>Circular Systems Sandbox (CSS)</strong> is a cutting-edge solution designed to help businesses develop and optimize
              circular value creation systems while actively addressing <strong>Circular Economy Rebound</strong> effects.
              Unlike traditional sustainability strategies that focus solely on product-level changes, CSS takes a holistic
              <em> Systems Thinking</em> approach—ensuring that circular initiatives deliver real environmental and economic benefits,
              not unintended consequences.
            </p>
          </div>

          {/* How CSS Supports Businesses */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How CSS Supports Businesses</h2>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>
                <strong>Mitigating Circular Economy Rebound:</strong> Strategies like reuse, remanufacturing, or recycling can backfire
                if not well-designed. CSS helps detect and prevent rebound effects before they escalate.
              </li>
              <li>
                <strong>Systems Thinking for Sustainable Innovation:</strong> CSS goes beyond optimizing products—it integrates services,
                models, and ecosystems for lasting circular value.
              </li>
              <li>
                <strong>Structured, Process-Driven Framework:</strong> CSS’s 5-phase, 27-step methodology supports clear, actionable transitions
                from linear to circular operations.
              </li>
              <li>
                <strong>Data-Driven & Research-Backed:</strong> Built on extensive academic and field research, CSS ensures measurable sustainability outcomes.
              </li>
              <li>
                <strong>Customizable & Scalable:</strong> Whether you’re a startup, SME, or multinational enterprise, CSS adapts to your industry and sustainability journey.
              </li>
            </ul>
          </div>

          {/* Why CSS Matters */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose CSS?</h2>
            <p className="text-lg">
              Many businesses adopt circular economy strategies without fully understanding potential rebound risks. CSS addresses this gap
              with a scientific and structured approach, ensuring that your sustainability efforts lead to genuine improvements in
              resource efficiency, emissions reduction, and long-term business value.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-10">
            <h3 className="text-xl font-medium text-gray-800 mb-4">🌍 Ready to make circularity work for your business?</h3>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}