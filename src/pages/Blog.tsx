
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  // Define blog categories
  const categories = [
    { id: 1, name: "Health & Beauty", posts: 8 },
    { id: 2, name: "Finance & Development", posts: 6 },
    { id: 3, name: "MAMI Pioneers", posts: 5 },
    { id: 4, name: "Opportunities", posts: 4 }
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      category: "Health & Beauty",
      title: "Self-Care Rituals for Busy Women",
      date: "April 12, 2025",
      preview: "Discover simple yet effective self-care practices that can be incorporated into even the busiest schedules...",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      category: "Finance & Development",
      title: "Building Wealth on Your Own Terms",
      date: "April 10, 2025",
      preview: "Financial independence looks different for everyone. Learn how to define and achieve your personal financial goals...",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      category: "MAMI Pioneers",
      title: "Spotlight: Women Breaking Barriers in Tech",
      date: "April 8, 2025",
      preview: "Meet the women who are changing the face of technology in Africa and creating pathways for future generations...",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      category: "Opportunities",
      title: "Grant Opportunities for Women Entrepreneurs",
      date: "April 6, 2025",
      preview: "A comprehensive guide to grants and funding opportunities specifically designed for women-led businesses in Africa...",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      category: "Health & Beauty",
      title: "Natural Skincare Routines for African Skin",
      date: "April 4, 2025",
      preview: "Learn about effective skincare ingredients and routines specifically formulated for African skin types...",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      category: "Finance & Development",
      title: "Investing in Your Future: A Beginner's Guide",
      date: "April 2, 2025",
      preview: "Start your investment journey with confidence using these simple strategies designed for beginners...",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Our Blog</h1>
          
          {/* Blog description */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-600">
              Our blogs are designed to enrich different aspects of every woman's life, 
              to assist her in navigating life seamlessly, through health and fitness tips and stories, 
              beauty tips, opportunities, self-development and more…
            </p>
          </div>
          
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair mb-6 text-center">Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/blog/category/${category.id}`} 
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  {category.name} <span className="text-sm text-gray-500">({category.posts})</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
                  </div>
                  <h3 className="font-playfair text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.preview}</p>
                  <Link to={`/blog/${post.id}`} className="text-sm font-medium hover:underline inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </Link>
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

export default Blog;
