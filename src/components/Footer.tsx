import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <a href="mailto:Konstantin.Remke@gmail.com" className="flex items-center text-gray-500 hover:text-green-600">
                <Mail className="h-5 w-5 mr-2" />
                Konstantin.Remke@gmail.com
              </a>
              <p className="flex items-center text-gray-500">
                <Phone className="h-5 w-5 mr-2" />
                +49 1520 3316417
              </p>
              <p className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-2" />
                Germany / Switzerland
              </p>
            </div>
          </div>

          {/* Quick Links */}
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
        </div>

        {/* Footer Note */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Circular Systems Sandbox by Konstantin Remke & Henry Willem Müller is licensed under CC BY-SA 4.0
          </p>
        </div>
      </div>
    </footer>
  );
}