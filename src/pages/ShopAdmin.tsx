
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AdminLogin from "../components/AdminLogin";
import ShopAdminPanel from "../components/ShopAdminPanel";

const ShopAdmin = () => {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <NavBar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {isAdmin ? (
            <ShopAdminPanel />
          ) : (
            <div className="max-w-md mx-auto">
              <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-8">Admin Login</h1>
              <AdminLogin />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopAdmin;
