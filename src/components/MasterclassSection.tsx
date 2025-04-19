
import React from 'react';
import { Button } from "@/components/ui/button";

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
      <div className="relative w-full h-screen lg:h-[2200px] bg-[#ad9a90] mt-5">
        <img
          src="/public/1.jpg"
          alt="Woman in yellow suit - Personal Branding Masterclass"
          className="w-full h-full  object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 bg-gradient-to-r from-black/20 to-transparent">
          {/* Top section with titles - Centered */}
          <div className="mb-12">
            <h2 className="font-seasons text-3xl md:text-4xl lg:text-5xl text-white italic mb-2">
              Brunch with MAMI
            </h2>
            <h2 className="font-seasons text-3xl md:text-4xl lg:text-5xl text-white italic mb-6">
              upcoming events
            </h2>

            <h1 className="font-seasons uppercase text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-wide mb-2">
              Cake and Finance
            </h1>
          </div>

          {/* Event locations section - Left aligned */}
          <div className="space-y-6 mt-8">
            {/* Johannesburg */}
            <div className="text-white">
              <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">
                JOHANNESBURG
              </h3>
              <p className="font-montserrat text-sm mb-1">
                01 February 2025
              </p>
              <p className="font-montserrat text-sm">
                10AM – 2PM | WE WORK, SANDTON
              </p>
            </div>

            {/* Cape Town */}
            <div className="text-white">
              <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">
                CAPE TOWN
              </h3>
              <p className="font-montserrat text-sm mb-1">
                01 March 2025
              </p>
              <p className="font-montserrat text-sm">
                10AM – 2PM | NEIGHBOURGOOD, CAPE QUARTER
              </p>
            </div>

            {/* Durban */}
            <div className="text-white">
              <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">
                DURBAN
              </h3>
              <p className="font-montserrat text-sm mb-1">
                05 April 2025
              </p>
              <p className="font-montserrat text-sm">
                10AM – 2PM | VENUE (TBC)
              </p>
            </div>

            {/* Johannesburg Return */}
            <div className="text-white">
              <h3 className="font-montserrat uppercase text-2xl md:text-3xl font-bold tracking-wider mb-1">
                JOHANNESBURG 'THE RETURN'
              </h3>
              <p className="font-montserrat text-sm mb-1">
                03 May 2025
              </p>
              <p className="font-montserrat text-sm">
                10AM – 2PM | VENUE (TBC)
              </p>
            </div>

            {/* Get tickets */}
            <div className="text-white mt-8">
              <p className="font-montserrat text-sm">Get your tickets</p>
              <p className="font-montserrat text-sm">www.brunchwithmami.com</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    {/* Description and Buttons - Now below the image */}
    <div className="w-full bg-white md:p-12  flex flex-col justify-center">
        <div className='w-full  lg:px-[300px] px-5 p-10  md:p-12 flex flex-col justify-center items-center'>
        <h3 className="font-montserrat uppercase text-xl md:text-4xl font-bold tracking-wider text-agenda-dark mb-6 text-center">
          Brunch with MAMI is back
        </h3>

        <p className="text-agenda-dark mb-8 text-center text-xl">
          Our signature space where women come together to connect, grow,
          and build meaningful conversations over good food and good vibes.
          And this time? We're diving into a topic we all need to master:
          Money. <br /> <br />
          Join us for our upcoming session: "Cake and Finance" — where we're
          serving up sweet treats and smart money moves.
        </p>
        <p className="text-agenda-dark mb-10 text-center text-xl">
          Whether you're just getting started with budgeting, want to save
          smarter, or are ready to talk investing — this brunch is for YOU.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-agenda-dark text-white hover:bg-agenda-dark/90 uppercase text-sm tracking-wider py-6">
            BUY TICKETS
          </Button>
        </div>
        </div>
      </div>
  </div>
</section>
  );
};

export default MasterclassSection;
