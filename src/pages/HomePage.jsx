import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home-page.css";
import Testimonial from "../components/Testimonial";
import Service from "../components/Service";
import Testing from "../components/Testing";
import Gallery from "../components/Gallery";
import { NavLink } from "react-router-dom";
import Base from "../components/main/Base";

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

  const [services, setServices] = useState([
    {
      imgUrl: "./src/assets/pictures/spa-nail-min-sq.jpg",
      name: "Manicures and Pedicures",
      description:
        "Experience deep relaxation with our signature massage treatments.",
    },
    {
      imgUrl: "./src/assets/pictures/spa-nail-min-sq.jpg",
      name: "Facials",
      description:
        "Experience deep relaxation with our signature massage treatments.",
    },
    {
      imgUrl: "./src/assets/pictures/spa-nail-min-sq.jpg",
      name: "Hair Service",
      description:
        "Experience deep relaxation with our signature massage treatments.",
    },
  ]);

  return (
    <Base>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="">
          {/* Hero section */}
          <div
            className="hero-section 
          bg-white dark:bg-slate-700 
          px-6 md:px-12 lg:px-24 pb-16 pt-28
          flex flex-col gap-6 md:flex-row justify-between overflow-hidden"
          >
            <div className="hero-left px-2 w-full lg:w-1/2 mb-14 lg:mb-0">
              <p className="text-xl mb-8 text-slate-500 dark:text-slate-200">
                WELCOME TO RESPIRA
              </p>
              <h1
                className="text-6xl/18 md:text-5xl/13 lg:text-6xl/18 
                text-slate-700 dark:text-slate-50 font-semibold"
              >
                Experience Luxury Wellness & Relaxation
              </h1>
              <p className="mt-6 pe-2 text-slate-900 dark:text-slate-100">
                Indulge in our premium spa treatments designed to rejuvenate
                your body and soul. Our expert therapists provide personalized
                services in a serene environment.
              </p>
              <NavLink to="/booking">
                <button
                  className="mt-10 text-sm cursor-pointer transition-all duration-200
                bg-slate-600 hover:bg-slate-500 dark:bg-slate-200 dark:hover:bg-slate-50 
                font-semibold text-white dark:text-black py-3 px-6 rounded-full"
                >
                  Book Appointment
                </button>
              </NavLink>
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

          {/* Services section */}
          <div
            id="service-section"
            className="py-16 px-6 md:px-12 lg:px-24 dark:bg-slate-900 bg-slate-200"
          >
            <h1
              className="text-5xl text-center font-semibold 
            text-slate-700 dark:text-slate-100"
            >
              Our Services
            </h1>
            <p className="text-center mt-6 text-slate-600 dark:text-slate-200">
              Discover our range of luxury treatments and experiences
            </p>
            <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((item, i) => {
                return (
                  <div key={i}>
                    <Service
                      imgUrl={item.imgUrl}
                      name={item.name}
                      description={item.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* End of Services */}

          {/* Gallery section */}
          <div
            id="gallery-section"
            className="bg-white dark:bg-slate-200 py-16 px-6 md:px-12 lg:px-24"
          >
            <Gallery />
          </div>
          {/* End of Gallery */}

          {/* Testimonial section */}
          <div
            id="testimonial-section"
            className="py-16 px-6 md:px-12 lg:px-24 dark:bg-slate-700 bg-slate-200 "
          >
            <h1
              className="text-slate-700 dark:text-slate-100 
              text-4xl md:text-5xl font-semibold text-center mb-12
              "
            >
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
      </div>
    </Base>
  );
};

export default HomePage;
