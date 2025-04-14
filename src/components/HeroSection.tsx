
import React from 'react';
import { Instagram } from 'lucide-react';

// Upload the hero image to the project
const heroImage = '/lovable-uploads/1605f432-5096-4c3a-9218-5697ff2f2aaa.png';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero Image Grid */}
      <div className="hero-grid">
        <div className="hero-item-1">
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1280&auto=format&fit=crop" alt="Aesthetic image 1" />
        </div>
        <div className="hero-item-2">
          <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1280&auto=format&fit=crop" alt="Aesthetic image 2" />
        </div>
        <div className="hero-item-3">
          <img src="https://images.unsplash.com/photo-1534083264897-aeabfc7daf8a?q=80&w=1280&auto=format&fit=crop" alt="Aesthetic image 3" />
        </div>
        <div className="hero-item-4">
          <img src="https://images.unsplash.com/photo-1598897516090-8c467de001f7?q=80&w=1280&auto=format&fit=crop" alt="Aesthetic image 4" />
        </div>
        <div className="hero-item-5">
          <img src="https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?q=80&w=1280&auto=format&fit=crop" alt="Aesthetic image 5" />
        </div>
        <div className="hero-item-6">
          <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1280&auto=format&fit=crop" alt="Aesthetic image 6" />
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="bg-black/30 px-8 py-16 md:px-16 md:py-24 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-6 tracking-wide animate-fade-in">
            Agenda Women
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfair mb-8 md:mb-12 tracking-wide animate-fade-in" style={{ animationDelay: "0.2s" }}>
            BRINGING WOMEN TOGETHER TO LEARN
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfair mb-12 md:mb-16 tracking-wide animate-fade-in" style={{ animationDelay: "0.4s" }}>
            AND GROW
          </h2>
          <button className="bg-white text-agenda-dark px-8 py-3 font-montserrat text-sm tracking-widest hover:bg-opacity-90 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center space-x-2">
              <Instagram size={16} />
              <span>FOLLOW US ON INSTAGRAM</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
