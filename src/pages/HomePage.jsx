import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../assets/styles/home-page.css';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-12 lg:pt-24 flex-grow">
        <div className="hero-section px-12 lg:px-24 py-16 flex flex-col lg:flex-row justify-between">
          <div className="hero-left w-full lg:w-1/2 mb-14 lg:mb-0">
            <p className="text-xl mb-8">WELCOME TO RESPIRA</p>
            <h1 className="text-6xl font-semibold">Experience Luxury Wellness & Relaxation</h1>
          </div>
          <div className="hero-right w-full lg:w-1/2">
            <img src="./src/assets/spa-hero-2.jpg" alt="hero" />
            <div className="graphic-element graphic-1"></div>
            <div className="graphic-element graphic-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
