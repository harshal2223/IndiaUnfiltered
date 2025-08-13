import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="impact" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Experience background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <p className="text-amber-400 font-medium tracking-[0.3em] text-sm mb-6 uppercase">
                GET AN
              </p>
              <h2 className="text-6xl lg:text-8xl font-light leading-[0.9] mb-8">
                <span className="block font-bold italic text-7xl lg:text-9xl">
                  Experience
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-gray-200 leading-relaxed mb-12">
              <p>
                Beyond traditional newsletters, we deliver immersive experiences 
                that transform how you consume and understand information.
              </p>
              
              <p>
                Interactive insights, multimedia storytelling, and personalized 
                content pathways create a reading experience unlike any other.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">95%</div>
                <div className="text-white/80 font-medium">Reader Engagement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-white/80 font-medium">Content Access</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Interactive Content</h4>
              <p className="text-white/80 leading-relaxed">
                Engage with dynamic visualizations, embedded media, and interactive elements 
                that bring stories to life.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ml-8">
              <h4 className="text-xl font-bold text-white mb-3">Personalized Insights</h4>
              <p className="text-white/80 leading-relaxed">
                AI-powered content curation ensures you receive the most relevant 
                insights for your interests and industry.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Expert Network</h4>
              <p className="text-white/80 leading-relaxed">
                Direct access to thought leaders, researchers, and industry experts 
                through exclusive interviews and commentary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;