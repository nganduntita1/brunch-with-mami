
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            HOME
          </Link>
          <Link to="/about" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            ABOUT
          </Link>
          <Link to="/blog" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            BLOG
          </Link>
          <Link to="/masterclasses" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            MASTERCLASSES
          </Link>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center flex-1 md:flex-none">
          <Link to="/" className="text-center">
            <h1 className="font-playfair text-xl md:text-2xl italic">agenda women</h1>
            <p className="text-xs font-montserrat tracking-wider">finding clarity and courage together</p>
          </Link>
        </div>

        {/* Right navigation links */}
        <div className="hidden md:flex space-x-10">
          <Link to="/shop" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            SHOP
          </Link>
          <Link to="/money-dates" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            #AWMONEYDATES
          </Link>
          <Link to="/summit" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            #AWSUMMIT2024
          </Link>
        </div>

        {/* Placeholder to balance the layout on mobile */}
        <div className="block md:hidden w-6"></div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-agenda-light">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-montserrat text-sm font-medium tracking-widest">
              HOME
            </Link>
            <Link to="/about" className="font-montserrat text-sm font-medium tracking-widest">
              ABOUT
            </Link>
            <Link to="/blog" className="font-montserrat text-sm font-medium tracking-widest">
              BLOG
            </Link>
            <Link to="/masterclasses" className="font-montserrat text-sm font-medium tracking-widest">
              MASTERCLASSES
            </Link>
            <Link to="/shop" className="font-montserrat text-sm font-medium tracking-widest">
              SHOP
            </Link>
            <Link to="/money-dates" className="font-montserrat text-sm font-medium tracking-widest">
              #AWMONEYDATES
            </Link>
            <Link to="/summit" className="font-montserrat text-sm font-medium tracking-widest">
              #AWSUMMIT2024
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
