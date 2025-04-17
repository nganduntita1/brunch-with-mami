
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 lg:px-16 bg-agenda-light">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Left navigation links - desktop */}
        <div className="hidden md:flex space-x-6 justify-start">
          <Link to="/" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            HOME
          </Link>
          <Link to="/about" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            ABOUT
          </Link>
          <Link to="/blog" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            BLOG
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo - always centered */}
        <div className="flex justify-center">
          <Link to="/" className="text-center">
            <h1 className="font-playfair text-xl md:text-2xl italic">brunch with mami</h1>
            <p className="text-xs font-montserrat tracking-wider">finding clarity and courage together</p>
          </Link>
        </div>

        {/* Right navigation links - desktop */}
        <div className="hidden md:flex space-x-6 justify-end">
          <Link to="/events" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            EVENTS & COURSES
          </Link>
          <Link to="/shop" className="font-montserrat text-sm font-medium tracking-widest hover:text-gray-600 transition-colors duration-300">
            SHOP
          </Link>
        </div>

        {/* Empty div for mobile to maintain grid structure */}
        <div className="md:hidden"></div>
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
            <Link to="/events" className="font-montserrat text-sm font-medium tracking-widest">
              EVENTS & COURSES
            </Link>
            <Link to="/shop" className="font-montserrat text-sm font-medium tracking-widest">
              SHOP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
