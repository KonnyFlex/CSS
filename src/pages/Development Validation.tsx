import React from 'react';

export function DevelopmentValidation() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Development & Validation
          </h1>
          <p className="mt-4 text-xl text-green-100">
            The story behind the Circular Systems Sandbox (CSS) tool
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Story Behind the Development of Our Tool
            </h2>
            <p className="text-lg mb-4">
              The <strong>Circular Systems Sandbox (CSS)</strong>—the foundation of Teal & Wheel Systems—was created through a
              cross-university collaboration between two PhD researchers as part of an extensive research project on circular economy innovation.
            </p>
            <p className="text-lg mb-4">
              <strong>Henry Müller</strong> (University of St. Gallen) and <strong>Konstantin Remke</strong> (ESCP Business School) conducted
              an in-depth global study, including:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>31 expert interviews with leading professionals in circular economy</li>
              <li>11 interactive workshops with circular economy specialists</li>
              <li>An 8-week design challenge with 108 participants to refine the tool’s usability and effectiveness</li>
            </ul>
            <p className="text-lg mt-4">
              This rigorous research process helped evaluate and optimize the tool to support better systemic design and reduce negative externalities
              in business and sustainability applications.
            </p>
            <p className="text-lg mt-4">
              The CSS tool is the direct outcome of this research initiative, alongside two scientific publications in the <em>Journal of Business Venturing Design</em> (VHB: B) and <em>Lecture Notes in Computer Science</em> (VHB: B).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-lg">
              Our tool is designed to empower businesses and startups with data-driven insights to create sustainable, circular business models—
              helping to drive real-world impact in the shift toward a more sustainable economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}