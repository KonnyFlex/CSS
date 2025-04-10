import React from 'react';

export function TheTool() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            The Tool
          </h1>
          <p className="mt-4 text-xl text-green-100">
            Transforming Circular Value Creation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800">
          {/* Overview */}
          <div>
            <p className="text-lg mb-4">
              The <strong>Circular Systems Sandbox (CSS)</strong> is the first and only software tool on the market designed to help businesses
              create and optimize circular value creation systems—encompassing products, services, business models, and ecosystems.
            </p>
          </div>

          {/* How it works */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How CSS Works</h2>
            <p className="text-lg">
              CSS is a process-driven tool that guides users through a structured 5-phase framework, consisting of 27 process steps.
              Each step is strategically designed to facilitate systemic thinking, innovation, and sustainable transformation.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features & Benefits</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li><strong>Step-by-Step Guidance:</strong> 5-phase process for structured circular business innovation.</li>
              <li><strong>Knowledge Base & FAQ:</strong> Expert insights, best practices, and real-world examples.</li>
              <li><strong>Collaborative Workspaces:</strong> Brainstorming zones for team ideation and refinement.</li>
              <li><strong>Scalable & Versatile:</strong> Adaptable to startups, SMEs, and corporations across industries.</li>
              <li><strong>Sustainability Impact:</strong> Aligns with circular economy, ESG goals, and regulations by reducing externalities.</li>
            </ul>
          </div>

          {/* Why it's a game changer */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why CSS is a Game-Changer</h2>
            <p className="text-lg">
              Unlike traditional linear business strategy tools, CSS is built to drive circular transformation—moving beyond buzzwords
              into practical, scalable solutions. By leveraging process-based innovation, knowledge sharing, and collaborative workflows,
              CSS empowers organizations to achieve both profitability and environmental responsibility.
            </p>
          </div>

          {/* Embedded Miro Board */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">🔍 Explore the CSS Tool in Action</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-green-100">
              <iframe
                src="https://miro.com/app/board/uXjVN2cKzGc=/"
                allowFullScreen
                className="w-full h-full"
                title="CSS Miro Board"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Powered by Miro – Best viewed in fullscreen for full interactivity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}