import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Shop = () => {
  const { isAdmin } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-12">
            <h1 className="font-playfair text-3xl md:text-4xl italic text-center">Brunch with MAMI Shop</h1>
            {isAdmin && (
              <Link
                to="/shop/admin"
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium ml-4"
              >
                Manage Products
              </Link>
            )}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-wide text-sm text-gray-600 mb-4">For Women, By Women</p>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Something exciting is on the way! Our shop will soon feature Brunch with MAMI merchandise and a curated selection of products and services from inspiring women entrepreneurs.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Every purchase will empower women, support local businesses, and carry the spirit of sisterhood into your everyday life. 🌸
              </p>
              <div className="inline-block rounded-full border border-dashed border-[#9b87f5] px-6 py-3">
                <span className="font-playfair italic text-xl md:text-2xl text-[#9b87f5]">✨ Coming Soon ✨</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;