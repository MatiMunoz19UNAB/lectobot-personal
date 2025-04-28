import React, { useEffect, useState } from "react";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
];

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); // cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden pt-20">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full h-[calc(100vh-80px)] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
