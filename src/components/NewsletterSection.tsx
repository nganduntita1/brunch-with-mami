
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from '@formspree/react';
import CountryCodeReference from './CountryCodeReference';

const NewsletterSection = () => {
  const [state, handleSubmit] = useForm("xzbokyja");

  if (state.succeeded) {
    return (
      <section className="py-16 relative bg-[#fff5f2] text-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-4 tracking-wide uppercase text-gray-800">
              JOIN THE SISTERHOOD
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30 shadow-sm">
              <p className="text-lg text-gray-700 mb-4">Thanks for joining!</p>
              <p className="text-gray-600">Welcome to the sisterhood! You'll receive exclusive content and updates soon.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative bg-[#fff5f2] text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4 tracking-wide uppercase text-gray-800">
            JOIN THE SISTERHOOD
          </h2>
          
          <p className="text-base mb-8 font-light max-w-2xl mx-auto leading-relaxed text-gray-600">
            Get exclusive access to empowering content, early event announcements, 
            and resources crafted specifically for ambitious women on the rise
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                            <Input 
                              id="firstName" 
                    name="firstName"
                              className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                              placeholder="Enter first name"
                    required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                            <Input 
                              id="lastName" 
                    name="lastName"
                              className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                              placeholder="Enter last name"
                    required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                          <Input 
                            id="email" 
                  name="email"
                            className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                            type="email" 
                            placeholder="your.email@example.com"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <Input 
                    id="countryCode" 
                    name="countryCode"
                    className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4 w-24 text-center" 
                    type="tel" 
                    placeholder="+"
                    maxLength={5}
                  />
                  <Input 
                    id="phone" 
                    name="phone"
                    className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4 flex-1" 
                    type="tel" 
                    placeholder="XXX XXX XXXX"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Enter your country code (e.g., + for South Africa, +1 for US/Canada, +44 for UK)
                  </p>
                  <CountryCodeReference />
                </div>
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                />
              </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                  disabled={state.submitting}
                  className="bg-gray-800 hover:bg-gray-900 text-white uppercase tracking-wide text-sm font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-sm w-full md:w-auto disabled:opacity-50"
                  >
                  {state.submitting ? "JOINING..." : "GET ACCESS NOW"}
                  </Button>
                </div>
                
                <p className="text-gray-500 text-xs mt-4">
                  ✨ We respect your privacy. No spam, just valuable content delivered straight to your inbox.
                </p>
              </form>
          </div>
          
          {/* <div className="mt-10 flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">5K+</div>
              <div className="text-gray-600 text-xs">Empowered Women</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600 text-xs">Exclusive Events</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">24/7</div>
              <div className="text-gray-600 text-xs">Support Community</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
