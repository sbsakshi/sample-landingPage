"use client"
import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { title: 'Product', items: ['Features', 'Integration', 'Updates', 'FAQ', 'Pricing'] },
    { title: 'Company', items: ['About', 'Blog', 'Careers', 'Manifesto', 'Press', 'Contract'] },
    { title: 'Resources', items: ['Examples', 'Community', 'Guides', 'Docs', 'Press'] },
    { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
  ];

  return (
    <footer className=" text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <Link href="/" className="text-blue-500 text-3xl font-bold mb-4">
              O
            </Link>
          </div>
          {menuItems.map((section, index) => (
            <div key={index} className="w-full md:w-1/5 mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-3">{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    <Link href={`/${section.title.toLowerCase()}/${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Youtube size={20} />
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;