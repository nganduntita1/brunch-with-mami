
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";

const NewsletterSection = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Here you would typically send this data to a server
    form.reset();
  };

  return (
    <section className="py-16 relative bg-[#fff5f2] text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4 tracking-wide uppercase text-gray-800">
            JOIN OUR INNER CIRCLE
          </h2>
          
          <p className="text-base mb-8 font-light max-w-2xl mx-auto leading-relaxed text-gray-600">
            Get exclusive access to empowering content, early event announcements, 
            and resources crafted specifically for ambitious women on the rise
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              id="firstName" 
                              className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                              placeholder="Enter first name"
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              id="lastName" 
                              className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                              placeholder="Enter last name"
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            id="email" 
                            className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                            type="email" 
                            placeholder="your.email@example.com"
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="bg-gray-800 hover:bg-gray-900 text-white uppercase tracking-wide text-sm font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-sm w-full md:w-auto"
                  >
                    GET ACCESS NOW
                  </Button>
                </div>
                
                <p className="text-gray-500 text-xs mt-4">
                  ✨ We respect your privacy. No spam, just valuable content delivered straight to your inbox.
                </p>
              </form>
            </Form>
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
