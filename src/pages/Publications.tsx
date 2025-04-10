import React from 'react';

export function Publications() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Publications
          </h1>
          <p className="mt-4 text-xl text-green-100">
            Advancing Research in Circular Business Innovation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800">
          <div>
            <p className="text-lg mb-4">
              Our <strong>Circular Systems Sandbox (CSS)</strong> tool is the result of rigorous academic research and has been
              recognized in leading scientific publications. We are committed to bridging the gap between theory and practice
              by applying <strong>Design Science Research (DSR)</strong> methodology, ensuring that businesses have access to
              data-driven, research-backed tools for circular economy transformation.
            </p>
          </div>

          {/* Published Research Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">📖 Published Research</h2>
            <ul className="space-y-4 text-lg">
              <li>
                ✔ <strong>Lecture Notes in Computer Science (VHB: B)</strong> – Our research on circular system innovation has been
                published in this highly regarded peer-reviewed journal, contributing to the field of digital transformation and sustainability.
              </li>
              <li>
                ✔ <strong>Journal of Business Venturing Design (VHB: B)</strong> – A new paper detailing the application of CSS in
                circular business model innovation. This publication provides further insights into entrepreneurial design for circular systems.
              </li>
            </ul>
          </div>

          {/* Why It Matters */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Our Research Matters</h2>
            <p className="text-lg mb-4">
              Our publications contribute to the scientific foundation of circular economy strategies, ensuring that businesses,
              startups, and researchers have access to proven methodologies for designing and optimizing sustainable business models.
            </p>
            <p className="text-lg font-medium text-green-700">
              📚 Stay updated on our latest research! Follow us for new publications and insights on circular business innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}