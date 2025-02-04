import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      question: 'Excepteur sint occaecat cupidatat non proident?',
      answer: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    },
    {
      question: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur?',
      answer: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}