import React from 'react';
import { ArrowRight, TreePine, Recycle, LineChart, ExternalLink } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Design sustainable products
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              We help businesses design their product for a sustainable and circular tomorrow through expert consulting and innovative frameworks.
            </p>
            {/*<div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>*/}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive sustainability solutions tailored to your needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: TreePine,
                title: 'Environmental Assessment',
                description: 'Detailed analysis of your environmental impact and opportunities for improvement.'
              },
              {
                icon: Recycle,
                title: 'Sustainability Strategy',
                description: 'Development of comprehensive sustainability strategies aligned with your business goals.'
              },
              {
                icon: LineChart,
                title: 'Performance Monitoring',
                description: 'Continuous monitoring and reporting of sustainability metrics and achievements.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miro Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white rounded-lg shadow-lg">
              {/* This div will be replaced with the Miro iframe once you provide the link */}
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/img/miro.png" alt="Miro" className="w-full h-full object-contain"/>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover our framework</h2>
              <p className="text-lg text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              {/*TODO: Add link to Miro board*/}
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                Try it Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to make a difference?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Let's work together to create a sustainable future for your business.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}