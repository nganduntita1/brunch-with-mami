
import React from 'react';
import { Button } from "@/components/ui/button";

const MasterclassSection = () => {
  return (
    <section className="bg-agenda-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Masterclass Banner with Image and Text */}
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-lg">
          {/* Left side - Image with Text Overlay */}
          <div className="relative w-full lg:w-7/12 h-[600px] lg:h-auto bg-[#ad9a90]">
            <img 
              src="/lovable-uploads/3e942b9b-0fc1-4843-8cb3-4c53239406ae.png" 
              alt="Woman in yellow suit - Personal Branding Masterclass" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 bg-gradient-to-r from-black/20 to-transparent">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white italic mb-2">The Ultimate</h2>
              <h1 className="font-playfair uppercase text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-wide mb-2">PERSONAL</h1>
              <h1 className="font-playfair uppercase text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-wide mb-2">BRANDING</h1>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white italic mb-6">Masterclass</h2>
              
              <div className="space-y-8 mt-8">
                {/* Johannesburg */}
                <div className="text-white">
                  <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">JOHANNESBURG</h3>
                  <p className="font-montserrat text-sm mb-1">01 February 2025</p>
                  <p className="font-montserrat text-sm">10AM – 2PM | WE WORK, SANDTON</p>
                </div>
                
                {/* Cape Town */}
                <div className="text-white">
                  <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">CAPE TOWN</h3>
                  <p className="font-montserrat text-sm mb-1">01 March 2025</p>
                  <p className="font-montserrat text-sm">10AM – 2PM | NEIGHBOURHOOD, CAPE QUARTER</p>
                </div>
                
                {/* Durban */}
                <div className="text-white">
                  <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">DURBAN</h3>
                  <p className="font-montserrat text-sm mb-1">05 April 2025</p>
                  <p className="font-montserrat text-sm">10AM – 2PM | VENUE (TBC)</p>
                </div>
                
                {/* Johannesburg Return */}
                <div className="text-white">
                  <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">JOHANNESBURG</h3>
                  <h4 className="font-montserrat text-xl italic mb-1">'THE RETURN'</h4>
                  <p className="font-montserrat text-sm mb-1">03 MAY 2025</p>
                  <p className="font-montserrat text-sm">10AM – 2PM | VENUE (TBC)</p>
                </div>
                
                {/* Get tickets */}
                <div className="text-white">
                  <p className="font-montserrat text-sm">Get your tickets</p>
                  <p className="font-montserrat text-sm">www.agendawomen.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Description and Buttons */}
          <div className="w-full lg:w-5/12 bg-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-montserrat uppercase text-xl md:text-2xl font-bold tracking-wider text-agenda-dark mb-6 text-center">
              PERSONAL BRANDING MASTERCLASS
            </h3>
            
            <p className="text-agenda-dark mb-8 text-center">
              Your personal brand is more than a buzzword—it's your reputation, your voice, and your unique story in action. In today's fast-paced world, how you position yourself can make the difference between standing out or blending in.
            </p>
            
            <p className="text-agenda-dark mb-10 text-center">
              This Personal Branding Masterclass is designed to empower women professionals, entrepreneurs, and creatives to take ownership of their narrative and craft a personal brand that aligns with their goals and values. Led by Nomndeni Mdakhi—keynote speaker, entrepreneur, and branding expert—this session will equip you with actionable strategies to amplify your presence and create meaningful impact.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-agenda-dark text-white hover:bg-agenda-dark/90 uppercase text-sm tracking-wider py-6">
                BUY DURBAN TICKETS
              </Button>
              <Button className="bg-agenda-dark text-white hover:bg-agenda-dark/90 uppercase text-sm tracking-wider py-6">
                BUY JOHANNESBURG TICKETS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
