
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 lg:px-16 bg-agenda-light">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile menu button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation links */}
        <div className="hidden md:flex space-x-10">
          <a href="/" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            HOME
          </a>
          <a href="/about" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            ABOUT
          </a>
          <a href="/blog" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            BLOG
          </a>
          <a href="/masterclasses" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            MASTERCLASSES
          </a>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center flex-1 md:flex-none">
          <div className="text-center">
            <h1 className="font-playfair text-xl md:text-2xl italic">agenda women</h1>
            <p className="text-xs font-montserrat tracking-wider">finding clarity and courage together</p>
          </div>
        </div>

        {/* Right navigation links */}
        <div className="hidden md:flex space-x-10">
          <a href="/shop" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            SHOP
          </a>
          <a href="/money-dates" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            #AWMONEYDATES
          </a>
          <a href="/summit" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            #AWSUMMIT2024
          </a>
        </div>

        {/* Placeholder to balance the layout on mobile */}
        <div className="block md:hidden w-6"></div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-agenda-light">
          <div className="flex flex-col space-y-4">
            <a href="/" className="font-montserrat text-sm font-medium tracking-widest">
              HOME
            </a>
            <a href="/about" className="font-montserrat text-sm font-medium tracking-widest">
              ABOUT
            </a>
            <a href="/blog" className="font-montserrat text-sm font-medium tracking-widest">
              BLOG
            </a>
            <a href="/masterclasses" className="font-montserrat text-sm font-medium tracking-widest">
              MASTERCLASSES
            </a>
            <a href="/shop" className="font-montserrat text-sm font-medium tracking-widest">
              SHOP
            </a>
            <a href="/money-dates" className="font-montserrat text-sm font-medium tracking-widest">
              #AWMONEYDATES
            </a>
            <a href="/summit" className="font-montserrat text-sm font-medium tracking-widest">
              #AWSUMMIT2024
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
