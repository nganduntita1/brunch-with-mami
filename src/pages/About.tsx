
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import img1 from '../assets/1.jpg';

import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img12 from "../assets/img12.JPG";

const About = () => {
  const galleryImages = [
    {
      src: img3,
      alt: "Women networking at an event",
      label: "Networking",
    },
    {
      src: img2,
      alt: "Women workshop session",
      label: "Workshops",
    },
    {
      src: img4,
      alt: "Brunch event setup",
      label: "Brunches",
    },
    {
      src: img6,
      alt: "Women in business casual attire",
      label: "Business",
    },
    {
      src: img7,
      alt: "Women enjoying coffee and conversation",
      label: "Connections",
    },
    {
      src: img12,
      alt: "Empowerment session",
      label: "Empowerment",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      
      {/* Hero Section - Full width background image */}
      <div className="w-full h-[60vh] relative overflow-hidden mb-16">
        <img 
          src={img3} 
          alt="Brunch with MAMI event" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl italic text-center mb-4">
            A CURATED SPACE FOR MODERN WORKING WOMEN
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full px-4 md:px-8 lg:px-16 mb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg mb-6">
            Brunch with MAMI is a networking and empowerment event for women, founded in 2021. 
            The Brunch has been curated to provide women with skills, empowerment and networks that 
            will help them navigate the evolving dynamics of being a woman through the lens of the communities shared experiences.
          </p>
          
          <p className="text-lg mb-6">
            Everyone's definition of success is very different. We support women to 
            achieve their definition of success through empowerment, skills sharing, workshops, 
            webinars, and access to information, online tools and networking.
          </p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="w-full bg-agenda-pink py-12 px-4 md:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-xl md:text-2xl uppercase font-bold mb-6">
            "OUR MISSION IS TO HELP YOU FIND HARMONY BETWEEN YOUR WORK AND WELLNESS THROUGH CONTENT AND PROGRAMMING THAT GIVES YOU THE CONFIDENCE TO OWN YOUR FUTURE"
          </h2>
        </div>
      </div>

      {/* Photo Gallery - Full width, 2x3 grid */}
      <div className="w-full mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Content Section */}
      <div className="w-full px-4 md:px-8 lg:px-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <p className="mb-6">
              <span className="font-bold">Why attend the Brunch? </span> 
              <br />              
              • Networking 
              Brunch with MAMI offers a unique opportunity to networking with like minded women in an intimate setting. It gives you an opportunity to share what you do and future aspirations around the table with other women, and just like that you could meet your future mentor, client, business partner etc. 
            </p>

            <p className="mb-6">
              • Empowerment 
              With 2 or more Speakers who join the Brunch to share their life story and nuggets of wisdom, it comes easy to be  empowered. The setting also makes it very easy to fill other women's cups too with your knowledge and skills. It is a beautiful exchange of energy and widsom over Brunch. 
            </p>
            
            <p className="mb-6">
              • In a room full of Smart women, you are most likely to walk out with a mentor or be connected with one.  
            </p>

            
          </div>
          
          <div>
            
            <p className="mb-6">
              • Food 
              It is a Brunch after all. Expect welcome cocktails that are Instagram worthy, and brunch spread to break your diet. 
            </p>
            <p className="mb-6">
              • Atmosphere 
              Imagine a morning in the garden looking good, surrounded by like minded women, a mimosa in hand, uplifting conversations, laughter and smiles. The atmosphere is good for the soul.
            </p>

            <p className="mb-6">
              • Fashion 
              With well curated themes, you get to dress well and fell good. Every woman deserves to look good every now and then, and get out of their comfort zone. 
            </p>
            
            {/* <p className="italic">
              Welcome to the tribe.<br />
              xoxo...
            </p> */}
          </div>
        </div>
      </div>

      {/* Meet the Founder Section */}
      <div className="w-full px-4 md:px-8 lg:px-16 mb-16">
        <h2 className="font-playfair text-3xl md:text-4xl text-center uppercase mb-12">Meet Our Founder</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <p className="italic mb-4">Hi there!</p>
            
            <p className="mb-6">
              My name is Mamahlape, now famously known as MAMI to my beautiful sisterhood of the Brunch. 
              To understand who I am, I think we need to back track a bit. My journey started in my parent's 
              garage when I was about 8 years old, where I would invite my peers to sit on old paint tin buckets 
              as I taught them whatever skill I just acquired or lend them my story books.
            </p>
            
            <p className="mb-6">
              In 2013 I represented my country, at the 63rd edition of Miss world as Miss Lesotho, and I think 
              my perspective on life pretty much changed then, from what one can achieve, and limitless possibilities 
              around us. This then fueled the 8-year-old in me that loved connecting people and assisting them tap 
              into their greatest selves.
            </p>
            
            <p className="mb-6">
              Fast forward post university after studying something I absolutely love with my whole heart, I knew 
              there was still something missing in my life, I still longed for a space where people come together 
              and skills are shared, conversations are had but in the most intimate and safe way.
            </p>
            
            <p>
              In a nutshell, I am a woman who wears many hats with passion and dedication, I am the founder of Brunch 
              with MAMI, a platform I hold dear because of the impact it has had for women.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src={img1} 
              alt="Mamahlape - MAMI" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
