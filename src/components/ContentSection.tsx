
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";

// Define the article interface
interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date?: string;
}

// Article data
const articles: Article[] = [
  // Wellness Articles
  {
    id: "w1",
    category: "WELLNESS | STRETCHING",
    title: "The Easiest 3-Minute Stretch That Fixes 'Desk Slouch'",
    description: "The Easiest 3-Minute Stretch That Fixes 'Desk Slouch'",
    image: "/placeholder.svg"
  },
  {
    id: "w2",
    category: "WELLNESS | MENTAL HEALTH",
    title: "The 'Let Them' Theory: The Mindset Shift That Changed Everything",
    description: "The 'Let Them' Theory: The Mindset Shift That Changed Everything",
    image: "/placeholder.svg"
  },
  {
    id: "w3", 
    category: "WELLNESS | GROWTH",
    title: "Your Time, Your Terms: Crafting a Lifestyle that Honors Your Personal Freedom",
    description: "Your Time, Your Terms: Crafting a Lifestyle that Honors Your Personal Freedom",
    image: "/placeholder.svg"
  },
  
  // Work Articles
  {
    id: "work1",
    category: "WORK | FINANCE | 2023",
    title: "The 3-Account Rule for Financial Peace of Mind",
    description: "The 3-Account Rule for Financial Peace of Mind",
    image: "/placeholder.svg",
    date: "Apr 3, 2023"
  },
  {
    id: "work2",
    category: "WORK | PRODUCTIVITY | 2023",
    title: "Digital Declutter: The 10-Minute Hack for Inbox Zero",
    description: "Digital Declutter: The 10-Minute Hack for Inbox Zero",
    image: "/placeholder.svg",
    date: "Apr 2, 2023"
  },
  {
    id: "work3",
    category: "WORK | EMAIL | 2023",
    title: "The one email rule that will change your inbox forever",
    description: "The One Email Rule That Will Change Your Inbox Forever",
    image: "/placeholder.svg",
    date: "Apr 7, 2023"
  }
];

// Conversation profiles
const conversationProfiles = [
  {
    id: "c1",
    name: "Noel Milasin",
    title: "Founder, VC Women",
    hashtag: "#AWPOWERFIFTY: Noel Milasin",
    image: "/lovable-uploads/657063aa-4838-4bca-ae05-449713bcc128.png"
  },
  {
    id: "c2",
    name: "Tania Habimana",
    title: "Co-Founder, Positive Africa",
    hashtag: "#AWPOWERFIFTY: Tania Habimana",
    image: "/lovable-uploads/657063aa-4838-4bca-ae05-449713bcc128.png"
  },
  {
    id: "c3",
    name: "Mukondi Ralushayi",
    title: "Co-Founder, The Creative Africa",
    hashtag: "#AWPOWERFIFTY: Mukondi Ralushayi",
    image: "/lovable-uploads/657063aa-4838-4bca-ae05-449713bcc128.png"
  }
];

// Filter articles by category
const wellnessArticles = articles.filter(article => article.id.startsWith('w'));
const workArticles = articles.filter(article => article.id.startsWith('work'));

// ArticleCard component
const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card className="border-none shadow-none overflow-hidden h-full">
      <AspectRatio ratio={1.5 / 1}>
        <div className="relative h-full">
          <img 
            src={article.image} 
            alt={article.title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
            <div className="text-white">
              <p className="text-xs font-medium mb-2">{article.category}</p>
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2">{article.title}</h3>
            </div>
          </div>
        </div>
      </AspectRatio>
      <CardContent className="pt-4 pb-2">
        <p className="text-sm text-agenda-gray">
          {article.date || ""}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-sm">{article.description}</p>
      </CardFooter>
    </Card>
  );
};

// Profile Card Component
const ProfileCard = ({ profile }: { profile: any }) => {
  return (
    <div className="relative">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="w-full h-auto"
        loading="lazy"
      />
      <div className="absolute top-5 left-5">
        <p className="text-xs font-medium">{profile.name}</p>
        <p className="text-xs">{profile.title}</p>
      </div>
      <div className="absolute right-5 top-5">
        <p className="text-sm font-playfair italic text-right">AWPOWER<span className="text-pink-300">50</span></p>
      </div>
      <div className="absolute bottom-5 left-0 right-0 text-center">
        <p className="text-xs font-medium">{profile.hashtag}</p>
      </div>
    </div>
  );
};

// Content Section Component with Wellness and Work sections
const ContentSection = () => {
  return (
    <section className="bg-agenda-light pb-0">
      {/* Wellness Section */}
      <div className="mb-24">
        <div 
          className="relative h-[350px] mb-16 bg-cover bg-center flex items-center justify-center" 
          style={{
            backgroundImage: `url('/lovable-uploads/cfdded52-90e0-4241-987e-5f4962852a8d.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <h2 className="font-montserrat text-white uppercase text-4xl font-bold tracking-wider mb-6">
              WELLNESS
            </h2>
            <Button className="bg-white text-black hover:bg-white/90 uppercase text-sm tracking-wider">
              LEARN MORE
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {wellnessArticles.map((article) => (
                <CarouselItem key={article.id} className="sm:basis-1/2 md:basis-1/3 p-2">
                  <ArticleCard article={article} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0" />
            <CarouselNext className="hidden md:flex right-0" />
          </Carousel>
        </div>
      </div>
      
      {/* Work Section */}
      <div className="mb-24">
        <div 
          className="relative h-[350px] mb-16 bg-cover bg-center flex items-center justify-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&q=75&fit=crop&w=1000')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <h2 className="font-montserrat text-white uppercase text-4xl font-bold tracking-wider mb-6">
              WORK
            </h2>
            <Button className="bg-white text-black hover:bg-white/90 uppercase text-sm tracking-wider">
              LEARN MORE
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {workArticles.map((article) => (
                <CarouselItem key={article.id} className="sm:basis-1/2 md:basis-1/3 p-2">
                  <ArticleCard article={article} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0" />
            <CarouselNext className="hidden md:flex right-0" />
          </Carousel>
        </div>
      </div>
      
      {/* Conversations Section */}
      <div className="mb-24">
        <div 
          className="relative h-[350px] mb-16 bg-cover bg-center flex items-center justify-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&q=75&fit=crop&w=1000')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <h2 className="font-montserrat text-white uppercase text-4xl font-bold tracking-wider mb-6">
              CONVERSATIONS
            </h2>
            <Button className="bg-white text-black hover:bg-white/90 uppercase text-sm tracking-wider">
              LEARN MORE
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conversationProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
