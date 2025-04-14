
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Our Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample blog posts */}
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <div key={post} className="border border-gray-200 rounded-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2">April {post}, 2025</p>
                  <h3 className="font-playfair text-xl mb-2">Blog Post Title {post}</h3>
                  <p className="text-gray-600 mb-4">
                    A short preview of the blog post content that gives readers an idea of what to expect...
                  </p>
                  <a href="#" className="text-sm font-medium hover:underline">Read More →</a>
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
