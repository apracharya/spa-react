import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home-page.css";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  const [testimonials, setTestimonial] = useState([
    {
      firstName: "Ram",
      lastName: "Dhakal",
      review:
        "An incredible sanctuary of relaxation. Every treatment feels personalized and thoughtful.",
      rating: 5,
    },
    {
      firstName: "Bishnu",
      lastName: "Mahato",
      review:
        "Professional, serene environment with treatments that truly rejuvenate body and mind.",
      rating: 5,
    },
    {
      firstName: "Simmina",
      lastName: "Tamang",
      review:
        "Exceptional service and attention to detail. My stress melts away the moment I walk in.",
      rating: 5,
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-12 flex-grow">
        {/* Hero section */}
        <div className="hero-section px-12 lg:px-24 py-16 flex flex-col gap-6 md:flex-row justify-between">
          <div className="hero-left px-2 w-full lg:w-1/2 mb-14 lg:mb-0">
            <p className="text-xl mb-8 text-slate-500">WELCOME TO RESPIRA</p>
            <h1 className="text-6xl/18 md:text-5xl/13 lg:text-6xl/18 text-slate-700 font-semibold">
              Experience Luxury Wellness & Relaxation
            </h1>
            <p className="mt-6 pe-2 text-slate-900">
              Indulge in our premium spa treatments designed to rejuvenate your
              body and soul. Our expert therapists provide personalized services
              in a serene environment.
            </p>
            <button className="mt-10 text-sm bg-slate-600 text-white py-3 px-6 rounded-full">
              Book Appointment
            </button>
          </div>
          <div className="hero-right flex flex-col justify-center lg:mt-12 w-full lg:w-1/2">
            <div className="hero-img-container">
              <img src="./src/assets/pictures/spa-hero-2.jpg" alt="hero" />
              <div className="graphic-element graphic-1"></div>
              <div className="graphic-element graphic-2"></div>
            </div>
          </div>
        </div>
        {/* End of Hero section */}

        {/* Testimonial section */}
        <div className="px-12 lg:px-24 bg-slate-200 py-16">
          <h1 className="text-slate-700 text-4xl md:text-5xl font-semibold text-center mb-12">
            What Our Customers are Saying
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => {
              return (
                <div key={i}>
                  <Testimonial
                    firstName={item.firstName}
                    lastName={item.lastName}
                    review={item.review}
                    rating={item.rating}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* End of Testimonial section */}


      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
