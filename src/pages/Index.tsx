
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MasterclassSection from "../components/MasterclassSection";
import ContentSection from "../components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <MasterclassSection />
        <ContentSection />
      </main>
    </div>
  );
};

export default Index;
