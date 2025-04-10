import React from 'react';

export function Partners() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Partners</h1>
          <p className="mt-4 text-xl text-green-100">
            Driving Circular Innovation Through Collaboration
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div>
            <p className="text-lg text-gray-700 mb-8">
              Collaboration is at the heart of our mission to advance circular business transformation.
              We partner with leading research institutions and innovation platforms to ensure that the Circular Systems Sandbox (CSS)
              reaches businesses, startups, and the academic community.
            </p>
          </div>

          {/* Partner 1 */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              🌍 Centre for Sustainability Transformation Applied Research (STAR)
            </h2>
            <p className="text-gray-700 text-lg">
              Led by Prof. Dr. Lüdeke-Freund, the STAR Centre offers scientific sustainability analyses for corporations.
              Our co-founder, Konstantin Remke, plays an active role in integrating CSS into these assessments—
              strengthening our consulting services with research-backed methodology.
            </p>
          </div>

          {/* Partner 2 */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              🚀 Business Model Toolbox
            </h2>
            <p className="text-gray-700 text-lg">
              In collaboration with Frederike Beha, we are forming a strategic alliance with the Business Model Toolbox—
              a platform supporting startup founders in developing business models. This partnership extends our impact in the startup ecosystem,
              enabling early-stage businesses to benefit from CSS.
            </p>
          </div>

          {/* Partner 3 */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              🎓 Center for Design Science in Entrepreneurship (DS:E)
            </h2>
            <p className="text-gray-700 text-lg">
              Led by Prof. Dr. Christoph Seckler, DS:E supports Design Science Research and entrepreneurship studies.
              Our collaboration ensures CSS is represented in the academic community, inspiring ongoing research and knowledge exchange.
            </p>
          </div>

          {/* Conclusion */}
          <div className="text-center pt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Stronger Together: Building the Future of Circular Business
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              These partnerships help us scale the impact of CSS across corporate, entrepreneurial, and academic contexts.
            </p>
            <p className="text-xl text-green-800 font-semibold">
              💡 Interested in partnering with us? Let’s collaborate to drive sustainable transformation together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}