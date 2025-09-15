import React from "react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AdminLogin from "../components/AdminLogin";
import AdminBlogPanel from "../components/AdminBlogPanel";

const Blog = () => {
  const { blogPosts, isLoading } = useBlogPosts();
  const { isAdmin, loading } = useAuth();

  // Show admin panel or login form at the top if user is on the admin route
  const isAdminRoute = window.location.pathname === "/blog/admin";

  if (isAdminRoute) {
    if (loading) {
      return (
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center py-12">Loading...</div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            {isAdmin ? (
              <AdminBlogPanel />
            ) : (
              <div className="max-w-md mx-auto">
                <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Admin Login</h1>
                <AdminLogin />
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl italic text-center">
              Our Blog
            </h1>
            {isAdmin && (
              <Link
                to="/blog/admin"
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium ml-4"
              >
                Manage Blog
              </Link>
            )}
          </div>

          {/* Blog description */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-600">
              Our blogs are designed to enrich different aspects of every
              woman's life, to assist her in navigating life seamlessly, through
              health and fitness tips and stories, beauty tips, opportunities,
              self-development and more…
            </p>
          </div>

          {/* Blog posts grid */}
          {isLoading ? (
            <div className="text-center py-12">Loading blog posts...</div>
          ) : (
            <div className="text-center py-12">No blog posts found.</div>
            // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            //   {blogPosts.map((post) => (
            //     <div key={post.id} className="border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow">
            //       <div className="h-48 bg-gray-200 overflow-hidden">
            //         <img
            //           src={post.image_url || "https://placehold.co/600x400?text=No+Image"}
            //           alt={post.title}
            //           className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            //           onError={(e) => {
            //             (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Image+Not+Found";
            //           }}
            //         />
            //       </div>
            //       <div className="p-4">
            //         <div className="flex justify-between items-center mb-2">
            //           <span className="text-xs text-gray-500">
            //             {format(new Date(post.date), "MMMM d, yyyy")}
            //           </span>
            //         </div>
            //         <h3 className="font-playfair text-xl mb-2">{post.title}</h3>
            //         <p className="text-gray-600 mb-4">{post.preview}</p>
            //         <Link to={`/blog/${post.id}`} className="text-sm font-medium hover:underline inline-flex items-center">
            //           Read More <span className="ml-1">→</span>
            //         </Link>
            //       </div>
            //     </div>
            //   ))}
            // </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
