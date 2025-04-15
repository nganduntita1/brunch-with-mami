
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import { toast } from "@/components/ui/sonner";

export function useBlogPosts() {
  const queryClient = useQueryClient();

  const blogPostsQuery = useQuery({
    queryKey: ["blogPosts"],
    queryFn: async (): Promise<BlogPost[]> => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        toast.error("Failed to fetch blog posts");
        throw error;
      }

      return data || [];
    },
  });

  const createBlogPost = useMutation({
    mutationFn: async (newPost: Omit<BlogPost, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert([newPost])
        .select()
        .single();

      if (error) {
        toast.error("Failed to create blog post");
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      toast.success("Blog post created successfully");
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
    },
  });

  const updateBlogPost = useMutation({
    mutationFn: async (post: Partial<BlogPost> & { id: string }) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .update(post)
        .eq("id", post.id)
        .select()
        .single();

      if (error) {
        toast.error("Failed to update blog post");
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      toast.success("Blog post updated successfully");
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
    },
  });

  const deleteBlogPost = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) {
        toast.error("Failed to delete blog post");
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Blog post deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
    },
  });

  return {
    blogPosts: blogPostsQuery.data || [],
    isLoading: blogPostsQuery.isLoading,
    error: blogPostsQuery.error,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
  };
}
