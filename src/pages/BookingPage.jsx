import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const BookingPage = () => {
  const [slides, setSlides] = useState([
      './src/assets/pictures/spa-hero-2.jpg',
    './src/assets/pictures/spa-nail-min.jpg',
    './src/assets/pictures/spa-facial-min.jpg',
    './src/assets/pictures/spa-tub-min.jpg',
  ]);
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-12 px-6 md:px-12 lg:px-24">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default BookingPage;
