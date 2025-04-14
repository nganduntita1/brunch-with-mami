
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "The Clarity Journal",
      price: "$29.99",
      description: "A guided journal to help you find clarity in your daily life.",
    },
    {
      id: 2,
      name: "Agenda Women Tote Bag",
      price: "$24.99",
      description: "Stylish and practical tote bag for your everyday essentials.",
    },
    {
      id: 3,
      name: "Mindfulness Meditation Course",
      price: "$49.99",
      description: "Digital course to help you develop a consistent meditation practice.",
    },
    {
      id: 4,
      name: "Financial Planning Workbook",
      price: "$19.99",
      description: "A comprehensive workbook to help you take control of your finances.",
    },
    {
      id: 5,
      name: "AW Summit 2024 Recordings",
      price: "$79.99",
      description: "Full access to all sessions from our 2024 summit.",
    },
    {
      id: 6,
      name: "Finding Your Purpose E-Book",
      price: "$14.99",
      description: "A guide to discovering and living your purpose.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Shop</h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-center">
              Browse our curated collection of products designed to support your personal growth journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-playfair text-xl mb-1">{product.name}</h3>
                  <p className="font-bold mb-2">{product.price}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
