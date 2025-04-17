
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60",
      alt: "Women networking at an event",
      label: "Networking",
    },
    {
      src: "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&auto=format&fit=crop&q=60",
      alt: "Women workshop session",
      label: "Workshops",
    },
    {
      src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&auto=format&fit=crop&q=60",
      alt: "Brunch event setup",
      label: "Brunches",
    },
    {
      src: "https://images.unsplash.com/photo-1573499950808-f4f384e688bf?w=800&auto=format&fit=crop&q=60",
      alt: "Women in business casual attire",
      label: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60",
      alt: "Women enjoying coffee and conversation",
      label: "Connections",
    },
    {
      src: "https://images.unsplash.com/photo-1566517694305-ff9c5bffddf3?w=800&auto=format&fit=crop&q=60",
      alt: "Empowerment session",
      label: "Empowerment",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">About Us</h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60" 
                alt="Women networking at Brunch with MAMI event" 
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
              
              <p className="mb-6">
                Brunch with MAMI is a networking and empowerment event for women, founded in 2021. 
                The Brunch has been curated to provide women with skills, empowerment and networks that 
                will enable them to achieve success on their own terms.
              </p>
              
              <p className="mb-6">
                Everyone's definition of success is very different. We support women to 
                achieve their definition of success through empowerment, skills sharing, workshops, 
                webinars, and access to information, online tools and networking.
              </p>
              
              <p className="mb-6">
                Our blogs are designed to enrich different aspects of every woman's life, 
                to assist her in navigating life seamlessly, through health and fitness tips and stories, 
                beauty tips, opportunities, self-development and more…
              </p>
              
              <p>
                Explore our shop to see all the female business owned products, curated with love and care. 
                We support women entrepreneurs across Africa.
              </p>
            </div>
            
            {/* Photo Gallery */}
            <div className="my-16">
              <h2 className="font-playfair text-2xl md:text-3xl italic text-center mb-6">Brunch with MAMI Moments</h2>
              <p className="text-center mb-8">Explore the various facets of our community through these images</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="relative">
                      <AspectRatio ratio={1} className="bg-muted">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                        <p className="font-montserrat text-sm font-medium">{image.label}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <Separator className="my-12" />
            
            {/* Meet the Founder Section */}
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl italic text-center mb-8">Meet MAMI - The Founder</h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=500&auto=format&fit=crop&q=60" 
                  alt="Mamahlape - MAMI" 
                  className="w-full md:w-1/3 h-64 object-cover rounded-lg"
                />
                
                <div className="md:w-2/3">
                  <p className="italic mb-4">Hi there!</p>
                  
                  <p className="mb-4">
                    My name is Mamahlape, now famously known as MAMI to my beautiful sisterhood of the Brunch. 
                    To understand who I am, I think we need to back track a bit. My journey started in my parent's 
                    garage when I was about 8 years old, where I would invite my peers to sit on old paint tin buckets 
                    as I taught them whatever skill I just acquired or lend them my story books. It quickly got famous 
                    around the neighbors in my village that if you are looking for your child he/she is probably in my 
                    parent's garage. Little did I know then that my purpose is probably bringing people together, 
                    equipping them with new skills.
                  </p>
                </div>
              </div>
              
              <p className="mb-4">
                In 2013 I represented my country, at the 63rd edition of Miss world as Miss Lesotho, and I think 
                my perspective on life pretty much changed then, from what one can achieve, and limitless possibilities 
                around us. This then fueled the 8-year-old in me that loved connecting people and assisting them tap 
                into their greatest selves. If I got to live in my dream so could everyone else.
              </p>
              
              <p className="mb-4">
                Fast forward post university after studying something I absolutely love with my whole heart, I knew 
                there was still something missing in my life, I still longed for a space where people come together 
                and skills are shared, conversations are had but in the most intimate and safe way. My love and respect 
                for women had always been profound. My dad passed from cancer at the age of 17, and since then I saw my 
                mother work so hard and be an epitome of what I call a strong woman. I have also always been surrounded 
                by women who support and guide me, from pageantry, to friends and strangers I met along the way. So Brunch 
                with MAMI was born from my purpose of connecting people and allowing them to grow and achieve success on 
                their own terms, and my love and respect for women and what they represent in my life.
              </p>
              
              <p>
                In a nutshell, I am a woman who wears many hats with passion and dedication, I am the founder of Brunch 
                with MAMI, a platform I hold dear because of the impact it has had for women. I am an environmentalist who 
                through my company Smart Environmental Solutions I strive to increase food security in Africa through climate 
                change mitigation and adaptation, I am daughter to a beautiful woman who has moved mountains for me and 
                introduced me to the business world, a sister, an aunt, a friend, and a lover.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
