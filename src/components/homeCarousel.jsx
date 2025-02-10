"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CarouselDemo() {
  const slides = [
    {
      title: "Discover the World with Neema Baraka",
      text: "Your trusted guide to unforgettable travel experiences",
      button: "Get in touch",
      bgImage: "/home1.png",
    },
    {
      title: "Urban Dreams Await",
      text: "Immerse yourself in the vibrant energy of cityscapes.",
      button: "Get in touch",
      bgImage: "/copy.jpg",
    },
    {
      title: "Neon Nights Adventures",
      text: "Experience the dazzling colors of the night.",
      button: "Get in touch",
      bgImage: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Whispers of the Desert",
      text: "Feel the calm and vastness of the golden dunes.",
      button: "Get in touch",
      bgImage: "/cloud.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [timer, setTimer] = useState(null);

  // Auto-slide every 10 seconds
  useEffect(() => {
    startTimer();
    return () => clearInterval(timer);
  }, [currentIndex]);

  const startTimer = () => {
    clearInterval(timer);
    const newTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    setTimer(newTimer);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    startTimer(); // Reset timer
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    startTimer(); // Reset timer
  };

  return (
    <div 
        className="relative w-full h-screen overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
      {/* Slide */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentIndex].bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                key={slides[currentIndex].title}
                transition={{ delay: 0.55, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                {slides[currentIndex].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={slides[currentIndex].text}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="text-xl text-white mb-8 text-center"
            >
                {slides[currentIndex].text}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={slides[currentIndex].bgImage}
                transition={{ delay: 0.45, duration: 0.8 }}
            >
                <button className="mt-6 px-6 py-3 bg-primary rounded-full">
                <Link href="/contact">{slides[currentIndex].button}</Link>
                </button>
            </motion.div>
        </div>
      </div>

        {/* Navigation Buttons */}
        {hovered && (
            <>
            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white px-4 py-2 rounded-full"
            >
                ❮
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white px-4 py-2 rounded-full"
            >
                ❯
            </button>
            </>
        )}
    </div>
  );
}