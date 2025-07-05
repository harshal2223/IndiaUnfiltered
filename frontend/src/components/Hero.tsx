import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Stay Informed,
            <span className="text-blue-600 dark:text-blue-400"> Stay Inspired</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest insights, trends, and stories that matter. Our weekly digest delivers 
            carefully curated content straight to your inbox, helping you stay ahead in an ever-changing world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#newsletter"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
            >
              <Mail className="h-5 w-5 mr-2" />
              Subscribe Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#articles"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-200"
            >
              Browse Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;