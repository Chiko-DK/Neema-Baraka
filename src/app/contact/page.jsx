"use client"

import Nav from "@/components/nav";
import { motion } from 'motion/react';
import Carousel from "@/components/homeCarousel";

export default function About() {
    return (
      <>
        <header className="relative w-full h-screen bg-cover bg-center bg-red-550">

          <Nav />

          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(/contact.jpg)` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white text-center">
              <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
              >
                  Contact Us
              </motion.h1>
            </div>
          </div>

        </header>


        <div className="p-8">

        </div>
      </>
    );
  }
  