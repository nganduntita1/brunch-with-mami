
import React from 'react';
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  image: string;
  alt: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&q=75&fit=crop&w=600",
    alt: "Artistic dotted design"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&q=75&fit=crop&w=600",
    alt: "Agenda design post"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&q=75&fit=crop&w=600",
    alt: "Woman speaking into a podcast microphone"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&q=75&fit=crop&w=600",
    alt: "Group of professional women"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&q=75&fit=crop&w=600",
    alt: "Mindful multitasking tips"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1589395937772-f67057e233ef?auto=format&q=75&fit=crop&w=600",
    alt: "Productivity decision chart"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-[#FFF5F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center uppercase tracking-wide">
          Follow us on Instagram
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {instagramPosts.map(post => (
            <div key={post.id} className="aspect-square overflow-hidden relative group">
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="text-white h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gray-600 transition-colors"
          >
            <span>@agendawomen</span>
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
