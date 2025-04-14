
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">
              Agenda Women is a community dedicated to helping women find clarity and courage in their personal and professional lives. Founded in 2020, we've grown from a small blog to a thriving community of women supporting each other through life's challenges and celebrations.
            </p>
            <p className="mb-6">
              Our mission is to create spaces - both online and offline - where women can connect, learn, and grow together. We believe in the power of shared experiences and collective wisdom to transform individual lives and communities.
            </p>
            <p className="mb-6">
              Through our masterclasses, events, and online content, we address the topics that matter most to women today: career advancement, financial wellness, personal development, and building meaningful relationships.
            </p>
            <p>
              Join us as we continue to build a movement of women who are redefining success on their own terms and supporting each other every step of the way.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
