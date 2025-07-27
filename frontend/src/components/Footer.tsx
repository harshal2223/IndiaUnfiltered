import React from 'react';
import { Newspaper, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-12 py-8 border-t hairline-border text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm mb-4">© 2025 India Unfiltered. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;