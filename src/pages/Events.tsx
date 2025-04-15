
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events = () => {
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
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Cake and Finance: 6-Week Course",
      startDate: "Starts July 10, 2025",
      schedule: "Weekly sessions - Tuesdays 6:00 PM - 7:30 PM",
      format: "Virtual Course",
      description: "A comprehensive 6-week program covering personal finance essentials from budgeting to investing, specifically designed for women.",
      topics: ["Creating a personalized budget", "Debt management strategies", "Building an emergency fund", "Introduction to investing", "Retirement planning", "Estate planning basics"],
      price: "M450",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Events & Courses</h1>
          
          {/* Upcoming Events Section */}
          <section className="mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-center mb-8">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair text-xl mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-gray-500" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-500" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-bold mb-1">Start Date:</p>
                        <p className="text-sm">{course.startDate}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-bold mb-1">Schedule:</p>
                        <p className="text-sm">{course.schedule}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-bold mb-1">Format:</p>
                        <p className="text-sm">{course.format}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-bold mb-1">Course Fee:</p>
                        <p className="text-sm">{course.price}</p>
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
                      Enroll Now
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
