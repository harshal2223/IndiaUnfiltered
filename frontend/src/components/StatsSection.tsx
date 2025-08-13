import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: "50K+",
      label: "Subscribers",
      description: "Global readership"
    },
    {
      number: "500+",
      label: "Articles", 
      description: "Published insights"
    },
    {
      number: "100+",
      label: "Experts",
      description: "Contributing writers"
    },
    {
      number: "25+",
      label: "Countries",
      description: "Worldwide reach"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:bg-white/10">
                <div className="text-4xl lg:text-5xl font-light text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-amber-400 font-bold tracking-[0.1em] mb-2 text-lg">
                  {stat.label.toUpperCase()}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;