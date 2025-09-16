import { type FC } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

// Import images with type assertions
import img1 from '../assets/1.jpg';
import eventImage from '../assets/event-1.jpeg';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  startDate: string;
  schedule: string;
  format: string;
  description: string;
  topics: string[];
  price: string;
  image: any;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const Events: FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "May Networking Brunch",
      date: "May 28, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "The Garden Venue, Maseru",
      description: "Join us for our monthly networking brunch where women come together to connect, share experiences, and grow together.",
      image: "https://images.unsplash.com/photo-1529333166437-7feb30cc6818?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Women in Tech Workshop",
      date: "June 15, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Innovation Hub, Maseru",
      description: "A hands-on workshop focused on introducing women to opportunities in the tech sector and developing basic coding skills.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Cake and Finance: Investment Basics",
      date: "June 30, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Virtual Event",
      description: "Learn the fundamentals of investing while enjoying cake in this relaxed virtual setting designed for financial beginners.",
      image: "./public/1.jpg"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Cake and Finance: 6-Month Program",
      format: "Virtual Course",
      description: "A comprehensive 6-month program covering personal finance essentials from budgeting to investing, specifically designed for women.",
      topics: ["Creating a personalized budget", "Debt management strategies", "Building an emergency fund", "Introduction to investing", "Retirement planning", "Estate planning basics"],
      image: img1
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Events & Courses</h1>
          
          {/* Upcoming Events Section */}
          <section className="mb-16">
            <div className="w-full overflow-hidden flex justify-center">
              <img 
                src={eventImage} 
                alt="Upcoming Event"
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </section>
          
          {/* Courses Section */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-center mb-8">Our Courses</h2>
            
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-50 rounded-lg overflow-hidden mb-8">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:w-2/3">
                    <h3 className="font-playfair text-2xl mb-3">{course.title}</h3>
                    
                    <div className="mb-4">
                      <div>
                        <p className="text-sm font-bold mb-1">Format:</p>
                        <p className="text-sm">{course.format}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm font-bold mb-2">Topics Covered:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {course.topics.map((topic, index) => (
                          <li key={index} className="text-sm">{topic}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="bg-black text-white hover:bg-gray-800 px-8">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
