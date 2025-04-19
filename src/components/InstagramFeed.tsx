import React, { useEffect } from 'react';
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  // This effect will load the Instagram embed script
  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.getElementById('instagram-embed-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, we need to call window.instgrm.Embeds.process()
      // to process any new embeds that have been added to the page
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }

    // Clean up function
    return () => {
      // Optional: remove the script when component unmounts
      // const script = document.getElementById('instagram-embed-script');
      // if (script) script.remove();
    };
  }, []);

  return (
    <section className="py-16 bg-[#FFF5F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center uppercase tracking-wide">
          Follow us on Instagram
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* First Instagram Post Embed */}
          <div className="w-full flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/p/DFsV8hHMVwN/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14"
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0,
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
          
          {/* Second Instagram Post Embed - you can add more posts here */}
          <div className="w-full flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/p/DDojNUSMYfH/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14"
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0,
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
          
          {/* Third Instagram Post Embed */}
          <div className="w-full flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/p/DIN-2RvMht2/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14"
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0,
                width: '99.375%'
              }}
            >
            </blockquote>
          </div>
          
          {/* You can add more posts as needed */}
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.instagram.com/brunch_with_mami/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gray-600 transition-colors"
          >
            <span>@brunchwithmami</span>
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Add this TypeScript declaration to avoid TS errors
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default InstagramFeed;