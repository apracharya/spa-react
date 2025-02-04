import React, { useState } from "react";
import Carousel from "./Carousel";

const Gallery = () => {
  const [slides, setSlides] = useState([
        './src/assets/pictures/spa-hero-2.jpg',
      './src/assets/pictures/spa-nail-min.jpg',
      './src/assets/pictures/spa-facial-min.jpg',
      './src/assets/pictures/spa-tub-min.jpg',
    ]);
  return (
    <div className="">
      <h1 className="text-center text-5xl font-semibold text-slate-700">
        A Glance at Our Service Areas
      </h1>
      <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-4xl text-cyan-800 font-medium leading-12">
            Discover the Ultimate Relaxation and Rejuvenation with our Signature
            Services.
          </h1>
          <p className="mt-10 text-slate-700 leading-7">We provide a variety of services with specialization on Swedish Massage, Hydrating facial, Hot Stone Therapy and much more.</p>
          <button className="mt-10 text-sm 
                bg-slate-700 dark:bg-slate-700 
                text-white dark:text-slate-100 py-3 px-6 rounded-full">
            Book Now
          </button>
        </div>

        <div className="gallery-images w-full lg:w-[60%]">
            <Carousel slides={slides}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
