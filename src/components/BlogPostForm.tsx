
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlogPost } from "@/types/blog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type BlogPostFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (post: Omit<BlogPost, "id" | "created_at">) => void;
  initialData?: Partial<BlogPost>;
  isSubmitting: boolean;
};

export default function BlogPostForm({
  open,
  onOpenChange,
  onSubmit,
  initialData,
  isSubmitting
}: BlogPostFormProps) {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    content: "",
    preview: "",
    image_url: "",
  });

  useEffect(() => {
    if (initialData && open) {
      setFormData({
        title: initialData.title || "",
        content: initialData.content || "",
        preview: initialData.preview || "",
        image_url: initialData.image_url || "",
      });
    }
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    
    onSubmit({
      title: formData.title || "",
      content: formData.content || "",
      preview: formData.preview || "",
      image_url: formData.image_url || null,
      date: initialData?.date || currentDate,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      preview: "",
      image_url: "",
    });
  };

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{initialData?.id ? "Edit" : "Create"} Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="preview">Preview Text</Label>
            <Textarea
              id="preview"
              name="preview"
              value={formData.preview || ""}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content || ""}
              onChange={handleChange}
              rows={8}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image_url">Image URL</Label>
            <Input
              id="image_url"
              name="image_url"
              value={formData.image_url || ""}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            {formData.image_url && (
              <img 
                src={formData.image_url} 
                alt="Preview" 
                className="mt-2 h-40 object-cover rounded-md"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Invalid+Image+URL";
                }}
              />
            )}
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
