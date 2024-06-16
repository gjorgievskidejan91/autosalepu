"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const Gallery = ({ car }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % car.imageUrl.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + car.imageUrl.length) % car.imageUrl.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    if (diff > 50) {
      handleNext();
      setIsDragging(false);
    } else if (diff < -50) {
      handlePrevious();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      {...swipeHandlers}
    >
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        {car.imageUrl.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={url}
              alt={`Car image ${index + 1}`}
              layout="fill"
              width={0}
              height={0}
              sizes="100vh"
              objectFit="contain"
              className="rounded-t-xl"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevious}
        className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#9654;
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {car.imageUrl.map((url, index) => (
          <div
            key={index}
            className={`relative w-16 h-16 border-2 cursor-pointer ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={url}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
