
import React from 'react';
import { Button } from "@/components/ui/button";
import eventImage from '../assets/event-1.jpeg';

const MasterclassSection = () => {
  return (
    <section className="bg-agenda-light ">
      
  <div className=" mx-auto px-1 py-16 md:py-24">
  <h2 className="text-3xl md:text-4xl font-seasons mb-16  text-center uppercase tracking-wide">
          Upcoming Events
        </h2>
    {/* Masterclass Banner with full-width, full-height Image */}
    <div className="flex flex-col overflow-hidden ">
      {/* Full-width, full-height Image with Text Overlay */}
      <div className="relative w-full h-[80vh] lg:h-[1760px] bg-[#ad9a90] mt-5">
        <img
          src={eventImage}
          alt="Upcoming Event - Cake and Finance"
          className="w-full h-full object-cover object-center"
        />
      </div>

      
    </div>
    {/* Description and Buttons - Now below the image */}
    
  </div>
</section>
  );
};

export default MasterclassSection;
