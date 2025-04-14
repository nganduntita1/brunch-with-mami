
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Masterclasses = () => {
  const upcomingMasterclasses = [
    {
      id: 1,
      title: "Personal Branding Masterclass",
      date: "May 15, 2025",
      location: "New York City",
      description: "Learn how to build your personal brand and stand out in your industry.",
    },
    {
      id: 2,
      title: "Financial Wellness Workshop",
      date: "June 5, 2025",
      location: "Online",
      description: "Master the fundamentals of personal finance and investment strategies.",
    },
    {
      id: 3,
      title: "Leadership Development",
      date: "July 20, 2025",
      location: "Los Angeles",
      description: "Develop the skills and mindset needed to lead with confidence and authenticity.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Masterclasses</h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-center">
              Join our transformative masterclasses designed to help you develop the skills, 
              knowledge, and mindset needed to thrive in all areas of your life.
            </p>
          </div>
          
          <div className="space-y-8">
            {upcomingMasterclasses.map((masterclass) => (
              <div key={masterclass.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 className="font-playfair text-2xl mb-2">{masterclass.title}</h2>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-sm bg-agenda-light px-3 py-1 rounded-full">{masterclass.date}</span>
                  <span className="text-sm bg-agenda-light px-3 py-1 rounded-full">{masterclass.location}</span>
                </div>
                <p className="mb-4">{masterclass.description}</p>
                <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Masterclasses;
