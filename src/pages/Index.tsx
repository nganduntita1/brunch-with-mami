
import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MasterclassSection from "../components/MasterclassSection";
import ContentSection from "../components/ContentSection";
import NewsletterSection from "../components/NewsletterSection";
import InstagramFeed from "../components/InstagramFeed";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <MasterclassSection />
        {/* <ContentSection /> */}
        <NewsletterSection />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
