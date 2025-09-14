
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Shop = () => {
  const { isAdmin } = useAuth();
  
  const benefits = [
    "Priority access to all Brunch with MAMI events",
    "Exclusive monthly virtual masterclasses",
    "Access to our private online community",
    "Personal growth and skill development resources",
    "Networking opportunities with like-minded women",
    "Special discounts on workshops and products",
    "Monthly newsletter with exclusive content",
    "One-on-one mentorship sessions (quarterly)"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl italic text-center">Shop & Membership</h1>
            {isAdmin && (
              <Link 
                to="/shop/admin" 
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium ml-4"
              >
                Manage Products
              </Link>
            )}
          </div>
          
          {/* Membership Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl italic text-center mb-8">Join Our Inner Circle</h2>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Membership Header */}
              <div className="bg-gradient-to-r from-[#9b87f5] to-[#FFDEE2] p-8 md:p-12 text-center">
                <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-white">Monthly Membership</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">M180</span>
                  <span className="text-xl text-white opacity-80 ml-1">/month</span>
                </div>
                <p className="text-white opacity-90 max-w-lg mx-auto">
                  Join our community of empowered women supporting each other to achieve success on their own terms.
                </p>
              </div>
              
              {/* Membership Benefits */}
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
                  <Button className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mt-16">
              <h3 className="font-playfair text-2xl italic text-center mb-8">What Our Members Say</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="italic mb-4">
                    "Joining the Brunch with MAMI sisterhood was one of the best decisions I've made for my personal growth. 
                    The community is so supportive and the resources are invaluable."
                  </p>
                  <p className="font-bold">Lerato M.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="italic mb-4">
                    "I've gained so much confidence and clarity since becoming a member. The monthly masterclasses 
                    have helped me refine my business strategy and connect with amazing women."
                  </p>
                  <p className="font-bold">Thato K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
