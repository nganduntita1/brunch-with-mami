
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-8">
          <p className="uppercase text-xs tracking-widest mb-4"></p>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </a>
          </div>
        </div> */}
        
        <div className="border-t border-gray-200 pt-6">
          <div className="text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Brunch with MAMI. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-black transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
