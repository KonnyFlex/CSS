import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <a href="mailto:contact@ecoconsult.com" className="flex items-center text-gray-500 hover:text-green-600">
                <Mail className="h-5 w-5 mr-2" />
                contact@ecoconsult.com
              </a>
              <p className="flex items-center text-gray-500">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-2" />
                123 Green Street, Eco City
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/pricing" className="text-gray-500 hover:text-green-600">Pricing</a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-green-600">About Us</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-500 hover:text-green-600">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-gray-500">Subscribe to our newsletter for the latest sustainability insights.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Circular Systems Sandbox by Konstantin Remke & Henry Willem Müller is licensed under CC BY-SA 4.0</p>
        </div>
      </div>
    </footer>
  );
}