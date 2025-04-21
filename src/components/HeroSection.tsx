import React from 'react';
import { Instagram } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="../../public/Hero.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay/filter for the entire background */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Overlay Text */}
      <div className="absolute bg-black/50 inset-0 flex flex-col items-center justify-center text-white/90 z-10">
        <div className="px-8 py-16 md:px-16 md:py-24 text-center max-w-16xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-seasons mb-8 md:mb-12 tracking-wide animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            BRINGING WOMEN TOGETHER TO LEARN AND GROW
          </h2>
          <button
            className="bg-white text-agenda-dark px-8 py-3 font-montserrat text-sm tracking-widest hover:bg-opacity-90 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center space-x-2">
              <Instagram size={16} />
              <span>
                <a
                  href="https://www.instagram.com/brunch_with_mami/"
                  target="_blank"
                  rel="noopener noreferrer"
                >FOLLOW US ON INSTAGRAM</a>
                
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;