
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Shop = () => {
  const { isAdmin } = useAuth();
  
  const products = [
    {
      id: 1,
      name: "Shea Butter Body Cream",
      price: "M180",
      description: "Handmade natural body cream using African shea butter and essential oils.",
      maker: "Lesotho Naturals",
      image: "https://images.unsplash.com/photo-1590393802688-ab3c404a0a5e?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "African Print Tote Bag",
      price: "M220",
      description: "Stylish and durable tote bag made with authentic African fabric.",
      maker: "Afri Designs",
      image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Beaded Jewelry Set",
      price: "M350",
      description: "Handcrafted beaded necklace and earring set inspired by traditional patterns.",
      maker: "Mama's Beads",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      name: "Financial Freedom Journal",
      price: "M200",
      description: "Guided journal to help women track their financial goals and progress.",
      maker: "She Succeeds",
      image: "https://images.unsplash.com/photo-1598367003132-4ae8d83a0086?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      name: "Organic Coffee Blend",
      price: "M150",
      description: "Premium coffee blend sourced from women-owned farms across Africa.",
      maker: "Sisters Brew",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      name: "Hand-woven Basket",
      price: "M280",
      description: "Traditional basket woven by skilled artisans using sustainable materials.",
      maker: "Woven Wonders",
      image: "https://images.unsplash.com/photo-1595826184901-5334ed9004d2?w=500&auto=format&fit=crop&q=60"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl italic">Shop</h1>
            {isAdmin && (
              <Link 
                to="/shop/admin" 
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Manage Products
              </Link>
            )}
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-center">
              Explore our shop to see all the female business owned products, curated with love and care. 
              We support women entrepreneurs across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-playfair text-xl">{product.name}</h3>
                    <p className="font-bold">{product.price}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">By {product.maker}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors w-full">
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
