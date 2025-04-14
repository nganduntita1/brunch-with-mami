
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Summit = () => {
  const speakers = [
    { id: 1, name: "Sarah Johnson", role: "CEO, Future Forward" },
    { id: 2, name: "Michelle Zhang", role: "Bestselling Author" },
    { id: 3, name: "Aisha Patel", role: "Financial Expert" },
    { id: 4, name: "Rebecca Moore", role: "Wellness Coach" },
    { id: 5, name: "Lydia Thompson", role: "Tech Entrepreneur" },
    { id: 6, name: "Carmen Rodriguez", role: "Leadership Consultant" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-agenda-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl italic mb-4">#AWSUMMIT2024</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us for a life-changing weekend of learning, connection, and transformation
            </p>
            <div className="mb-8">
              <p className="text-lg font-medium">October 18-20, 2024</p>
              <p className="text-lg">New York City & Virtual</p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Reserve Your Spot
            </button>
          </div>
        </section>

        {/* About section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl text-center mb-12">About The Summit</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-4">
                The annual Agenda Women Summit brings together thought leaders, experts, and hundreds of women from around the world 
                for three days of inspiring talks, practical workshops, and meaningful connections.
              </p>
              <p className="mb-4">
                Whether you attend in person in New York City or join us virtually, you'll have access to all keynote sessions, 
                your choice of workshops, and our exclusive community platform where you can network with other attendees.
              </p>
              <p>
                This year's theme, "Redefining Success," explores what success means on our own terms and how we can create lives 
                that align with our deepest values and aspirations.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl text-center mb-12">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map(speaker => (
                <div key={speaker.id} className="text-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-playfair text-xl mb-1">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-agenda-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-3xl mb-6">Join Us This October</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Early bird tickets are available until June 30. Don't miss this opportunity to be part of a transformative experience.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Get Your Ticket
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Summit;
