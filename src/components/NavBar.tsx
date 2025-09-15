
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 lg:px-16 bg-agenda-light">
      <div className="container mx-auto relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-left block">
              <h1 className="font-playfair text-lg md:text-xl italic">Brunch with MAMI</h1>
              <p className="text-[10px] font-montserrat tracking-wider">For women to achieve success on their own terms</p>
            </Link>
          </div>
          
          {/* Right side - All navigation links */}
          <div className="flex space-x-8">
            <Link to="/" className="font-montserrat text-[14px] font-bold tracking-widest hover:text-[#9d8474] transition-colors duration-300">
              HOME
            </Link>
            <Link to="/about" className="font-montserrat text-[14px] font-bold tracking-widest hover:text-[#9d8474] transition-colors duration-300">
              ABOUT
            </Link>
            <Link to="/blog" className="font-montserrat text-[14px] font-bold tracking-widest hover:text-[#9d8474] transition-colors duration-300">
              BLOG
            </Link>
            <Link to="/events" className="font-montserrat text-[14px] font-bold tracking-widest hover:text-[#9d8474] transition-colors duration-300">
              EVENTS & COURSES
            </Link>
            <Link to="/shop" className="font-montserrat text-[14px] font-bold tracking-widest hover:text-[#9d8474] transition-colors duration-300">
              SHOP
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          {/* Mobile Logo */}
          <Link to="/" className="text-left block">
            <h1 className="font-playfair text-base italic">Brunch with MAMI</h1>
            <p className="text-[9px] font-montserrat tracking-wider">For women to achieve success on their own terms</p>
          </Link>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 ml-4">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-agenda-light absolute top-16 left-0 right-0 z-40 shadow-lg border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-2">
              <Link to="/" className="font-montserrat text-sm font-bold tracking-widest hover:text-[#9d8474] transition-colors py-2 block">
                HOME
              </Link>
              <Link to="/about" className="font-montserrat text-sm font-bold tracking-widest hover:text-[#9d8474] transition-colors py-2 block">
                ABOUT
              </Link>
              <Link to="/blog" className="font-montserrat text-sm font-bold tracking-widest hover:text-[#9d8474] transition-colors py-2 block">
                BLOG
              </Link>
              <Link to="/events" className="font-montserrat text-sm font-bold tracking-widest hover:text-[#9d8474] transition-colors py-2 block">
                EVENTS & COURSES
              </Link>
              <Link to="/shop" className="font-montserrat text-sm font-bold tracking-widest hover:text-[#9d8474] transition-colors py-2 block">
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
