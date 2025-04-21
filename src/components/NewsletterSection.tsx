
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import img5 from '../assets/img5.JPG';

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
    <section 
      className="py-16 relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img5})`,
        backgroundPosition: "center 70%"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-playfair mb-6 tracking-wide uppercase text-white">
            BE PART OF THE SISTERHOOD
          </h2>
          
          <p className="text-lg mb-8">
            Join our newsletter and stay updated with the latest events, opportunities and resources
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    Name <span className="text-xs opacity-70">(FIRST)</span>
                  </label>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            id="firstName" 
                            className="bg-white/90 border-0 h-12" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    <span className="invisible md:visible">Name</span> <span className="text-xs opacity-70">(LAST)</span>
                  </label>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            id="lastName" 
                            className="bg-white/90 border-0 h-12" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-xs opacity-70">(ADDRESS)</span>
                </label>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          id="email" 
                          className="bg-white/90 border-0 h-12" 
                          type="email" 
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
                  className="bg-transparent hover:bg-white/20 border border-white text-white uppercase tracking-widest px-12 py-6"
                >
                  JOIN THE SISTERHOOD
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
