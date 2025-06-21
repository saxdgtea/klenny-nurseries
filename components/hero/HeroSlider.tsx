"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const images = ["/slider1.jpeg", "/slider2.jpeg", "/slider3.jpeg"];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5s rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          className={clsx(
            "object-cover transition-opacity duration-1000",
            current === i ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          priority={i === 0}
        />
      ))}

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center">
        <div className="text-white text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to FarmLife
          </h1>
          <p className="text-lg md:text-xl">
            Nurturing nature, one landscape at a time
          </p>
        </div>
      </div>
    </div>
  );
};
