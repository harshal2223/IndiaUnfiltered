import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="insights" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-widest text-sm mb-6 uppercase">
                ABOUT
              </p>
              <h2 className="text-5xl lg:text-7xl font-light text-gray-900 dark:text-white leading-tight mb-8">
                Disconnect to
                <span className="block font-extrabold text-6xl lg:text-8xl tracking-tight">
                  Connect.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              <p>
                In a world overwhelmed by information noise, we curate the signals that matter. Our newsletter cuts through the clutter to deliver insights that transform understanding and drive meaningful action.
              </p>

              <p>
                From breakthrough research to industry disruptions, from policy changes to cultural shifts — we connect the dots others miss, providing context that empowers informed decision-making.
              </p>
            </div>

            <a
              href="#research"
              className="group inline-flex items-center text-black dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="mr-4 tracking-wide">EXPLORE OUR RESEARCH</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Right Content - Image Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 h-[600px]">
              {/* Large Image */}
              <div className="col-span-8 row-span-2 rounded overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Newsletter creation and writing"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Top Right */}
              <div className="col-span-4 rounded overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Digital publishing"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Right */}
              <div className="col-span-4 rounded overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Knowledge and research"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Full Width */}
              <div className="col-span-12 rounded overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=200&fit=crop"
                  alt="Newsletter and articles"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
