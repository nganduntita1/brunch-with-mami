import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import MembershipForm from "../components/MembershipForm";

const Membership = () => {
  const [isMembershipFormOpen, setIsMembershipFormOpen] = useState(false);
  
  const benefits = [
    "🌸 Monthly yoga session – live with a professional instructor",
    "🌸 Monthly period care package delivered to you",
    "🌸 10% discount on all Brunch with MAMI events and workshops",
    "🌸 Exclusive monthly newsletter with content just for members",
    "🌸 Special discounts on products and services from our partners",
    "🌸 Priority access to free events and activities",
    "🌸 Personal growth & skill development resources",
    "🌸 Access to exclusive mentorship circles and events",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl italic text-center">Brunch with MAMI Membership – R250/month</h1>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            {/* <h2 className="font-playfair text-2xl md:text-3xl italic text-center mb-8">Join the Sisterhood</h2> */}

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#9b87f5] to-[#FFDEE2] p-8 md:p-12 text-center">
                <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-white">Join our exclusive membership community</h3>
                <p className="text-white opacity-90 max-w-2xl mx-auto">
                  Enjoy a variety of benefits designed to support your well-being, personal growth, and empowerment.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="font-montserrat uppercase text-lg mb-6 text-center">Membership Benefits</h3>

                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-[#9b87f5]">
                        <Check size={18} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Button 
                    onClick={() => setIsMembershipFormOpen(true)}
                    className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg"
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto text-center">
              <h3 className="font-playfair text-2xl italic text-center mb-4">Why this membership matters</h3>
              <p className="text-lg leading-relaxed">
                This is more than just a membership — it’s a promise to yourself. A promise to nurture your body, mind, and spirit while surrounding yourself with women who uplift and inspire.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Every yoga session, care package, and exclusive event is designed with you in mind — to remind you that you are worthy of rest, growth, and joy. Together, we’re creating a sisterhood where women don’t just come to network, but to heal, to learn, and to rise — side by side.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                By joining, you become part of a community that sees you, values you, and walks with you as you write your own story of success. 💫
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MembershipForm 
        open={isMembershipFormOpen}
        onOpenChange={setIsMembershipFormOpen}
      />
    </div>
  );
};

export default Membership;


