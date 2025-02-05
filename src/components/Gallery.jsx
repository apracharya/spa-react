import React, { useState } from "react";
import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  const [slides, setSlides] = useState([
    {
      imgUrl: "./src/assets/pictures/spa-hero-2.jpg",
      title: "Experience Ultimate Bliss with Our Swedish Massage",
      text: "Enjoy pure relaxation with our Swedish massage, designed to soothe muscles and melt away stress. Our skilled therapists use gentle strokes and kneading to enhance circulation and promote well-being. Discover the perfect balance of relaxation and rejuvenation at our spa.",
    },
    {
      imgUrl: "./src/assets/pictures/spa-nail-min.jpg",
      title: "Revitalize Your Hands with Our Luxurious Manicure Services",
      text: "Indulge in our exquisite manicure treatments designed to leave your hands feeling rejuvenated and looking impeccable. Our skilled technicians pamper you with precision and care, ensuring every detail is perfect. Treat yourself to a touch of elegance and discover the ultimate hand care experience at our spa.",
    },
    {
      imgUrl: "./src/assets/pictures/spa-facial-min.jpg",
      title: "Unveil Your Radiance with Our Exclusive Facial Treatments",
      text: "Experience the transformative power of our tailored facial treatments, designed to refresh and rejuvenate your skin. Our expert estheticians use premium products and advanced techniques to cleanse, exfoliate, and nourish your complexion. Discover the ultimate skincare indulgence at our spa.",
    },
    {
      imgUrl: "./src/assets/pictures/spa-tub-min.jpg",
      title: "Unwind and Refresh with Our Full Body Bath Treatments",
      text: "Immerse yourself in pure relaxation with our full body bath. Designed to cleanse, hydrate, and soothe, our treatments use premium ingredients to leave your skin feeling soft and refreshed. Let the calming ambiance and gentle care of our spa transport you to a state of tranquility.",
    },
  ]);

  const [currentTitle, setCurrentTitle] = useState(slides[0].title);
  const [currentText, setCurrentText] = useState(slides[0].text);

  const handleSlideChange = (index) => {
    setCurrentTitle(slides[index].title);
    setCurrentText(slides[index].text);
  };

  return (
    <div className="">
      <h1 className="text-center text-5xl font-semibold text-slate-700 dark:text-slate-100">
        A Glance at Our Service Areas
      </h1>
      <p className="text-center mt-6 text-slate-700 dark:text-slate-300">
        Discover the Ultimate Relaxation and Rejuvenation with our Signature
        Services.
      </p>
      <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-4xl text-cyan-800 dark:text-white font-semibold leading-12">
            {currentTitle}
          </h1>
          <p className="mt-10 text-justify text-slate-700 dark:text-slate-200 leading-7">
            {currentText}
          </p>
          <NavLink to="/booking">
            <button
              className="mt-10 text-sm transition-colors duration-300
                bg-slate-700 hover:bg-slate-600 dark:bg-slate-700 
                text-white dark:text-slate-100 
                py-3 px-6 rounded-full cursor-pointer"
            >
              Book Now
            </button>
          </NavLink>
        </div>

        <div className="gallery-images w-full lg:w-[60%]">
          <Carousel
            slides={slides}
            onSlideChange={handleSlideChange}
            intervalTime={4500}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
