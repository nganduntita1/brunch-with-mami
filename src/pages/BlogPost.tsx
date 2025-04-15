
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BlogPost } from "@/types/blog";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blogPost", id],
    queryFn: async (): Promise<BlogPost | null> => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <NavBar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">Loading post...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <NavBar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Post not found</h2>
              <p className="mb-6">We couldn't find the blog post you're looking for.</p>
              <button 
                onClick={() => navigate("/blog")}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format date
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => navigate("/blog")}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </button>

            <h1 className="font-playfair text-3xl md:text-4xl italic mb-4">{post.title}</h1>
            <div className="text-gray-500 mb-6">{formattedDate}</div>

            {post.image_url && (
              <div className="mb-8">
                <img 
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/800x400?text=Image+Not+Found";
                  }}
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
