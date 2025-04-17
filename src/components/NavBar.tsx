
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 lg:px-16 bg-agenda-light">
      <div className="container mx-auto flex flex-col relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left nav links */}
          <div className="flex space-x-6">
            <Link to="/" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
              HOME
            </Link>
            <Link to="/about" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
              ABOUT
            </Link>
            <Link to="/blog" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
              BLOG
            </Link>
            <Link to="/events" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
              EVENTS & COURSES
            </Link>
          </div>
          
          {/* Right nav links */}
          <div className="flex space-x-6">
            <Link to="/shop" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
              SHOP
            </Link>
          </div>
        </div>
        
        {/* Center Logo - Both desktop and mobile */}
        <div className="absolute left-0 right-0 mx-auto w-max top-0">
          <Link to="/" className="text-center block">
            <h1 className="font-playfair text-xl md:text-2xl italic">brunch with mami</h1>
            <p className="text-xs font-montserrat tracking-wider">finding clarity and courage together</p>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-20">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="w-6"></div> {/* Empty space to balance the button */}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-agenda-light absolute top-12 left-0 right-0 z-10">
            <div className="flex flex-col space-y-4 pt-10">
              <Link to="/" className="font-montserrat text-sm font-medium tracking-widest">
                HOME
              </Link>
              <Link to="/about" className="font-montserrat text-sm font-medium tracking-widest">
                ABOUT
              </Link>
              <Link to="/blog" className="font-montserrat text-sm font-medium tracking-widest">
                BLOG
              </Link>
              <Link to="/events" className="font-montserrat text-sm font-medium tracking-widest">
                EVENTS & COURSES
              </Link>
              <Link to="/shop" className="font-montserrat text-sm font-medium tracking-widest">
                SHOP
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
