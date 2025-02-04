import { useEffect, useRef, useState } from "react";

const Carousel = ({ slides, onSlideChange, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    onSlideChange(currentIndex);
  }, [currentIndex, onSlideChange]);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, intervalTime]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full overflow-hidden bg-gray-100"
    >
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide relative w-full flex-shrink-0"
          >
            <img
              src={slide.imgUrl}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 text-white text-sm px-2 py-1">
              * Hover over the image to stop auto scrolling
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
