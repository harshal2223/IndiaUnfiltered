import React from 'react';
import { ArrowRight, BookOpen, Newspaper, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern newsletter and digital publishing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="lg:col-span-7 text-white">
            <div className="mb-8">
              <p className="text-amber-400 font-medium tracking-[0.3em] text-sm mb-6 uppercase">
                DISCOVER
              </p>
              <h1 className="text-6xl lg:text-8xl font-light leading-[0.9] mb-8">
                We Have
                <span className="block font-bold text-7xl lg:text-9xl">
                  Everything
                </span>
                <span className="block text-5xl lg:text-7xl font-light text-gray-300">
                  You Need.
                </span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-12 max-w-2xl font-light">
              Impactful insights, cutting-edge analysis, and transformative stories 
              delivered through our premium newsletter experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#newsletter"
                className="group inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-none transition-all duration-300 transform hover:scale-105 hover:bg-amber-400"
              >
                <Newspaper className="h-5 w-5 mr-3" />
                <span className="mr-3 tracking-[0.1em] font-semibold">SUBSCRIBE</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <a
                href="#articles"
                className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-none hover:bg-white/10 transition-all duration-300"
              >
                <BookOpen className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <span className="tracking-[0.1em] font-semibold">EXPLORE</span>
              </a>
            </div>
          </div>

          {/* Right Content - Category Cards */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Row */}
              <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-amber-400 mb-2">INSIGHTS</div>
                <div className="text-white/80 font-medium tracking-wide text-sm">Deep Analysis</div>
                <div className="text-white/60 text-xs mt-2">Industry trends and forecasts</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group mt-8">
                <div className="text-3xl font-bold text-blue-400 mb-2">RESEARCH</div>
                <div className="text-white/80 font-medium tracking-wide text-sm">Data-Driven</div>
                <div className="text-white/60 text-xs mt-2">Evidence-based reporting</div>
              </div>
              
              {/* Bottom Row */}
              <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group mt-4">
                <div className="text-3xl font-bold text-green-400 mb-2">IMPACT</div>
                <div className="text-white/80 font-medium tracking-wide text-sm">Real Change</div>
                <div className="text-white/60 text-xs mt-2">Stories that matter</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-purple-400 mb-2">FUTURE</div>
                <div className="text-white/80 font-medium tracking-wide text-sm">Tomorrow's News</div>
                <div className="text-white/60 text-xs mt-2">Emerging technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;