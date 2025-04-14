
import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MoneyDates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl italic text-center mb-4">#AWMoneyDates</h1>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our community initiative to help women develop healthier relationships with money
          </p>
          
          <div className="bg-agenda-light p-8 rounded-lg mb-12">
            <h2 className="font-playfair text-2xl mb-4">What are Money Dates?</h2>
            <p className="mb-4">
              Money Dates are dedicated times when you check in with your finances. Just like you'd schedule time with a friend or partner, 
              these dates help you build a healthy, ongoing relationship with your money.
            </p>
            <p>
              Our #AWMoneyDates program provides structure, resources, and community support to make these check-ins effective and even enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-playfair text-xl mb-4">The Program Includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monthly guided money date workbooks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Live Q&A sessions with financial experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access to our private community group</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regular challenges to build healthy financial habits</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-playfair text-xl mb-4">Upcoming Money Dates:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">April 20, 2025 - Budget Review</p>
                  <p className="text-gray-600">Take stock of your spending and adjust your budget for the coming month.</p>
                </div>
                <div>
                  <p className="font-medium">May 18, 2025 - Investment Check-In</p>
                  <p className="text-gray-600">Review your investment strategy and learn about new opportunities.</p>
                </div>
                <div>
                  <p className="font-medium">June 15, 2025 - Debt Reduction Strategy</p>
                  <p className="text-gray-600">Create an actionable plan to reduce and eventually eliminate debt.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Join #AWMoneyDates
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoneyDates;
