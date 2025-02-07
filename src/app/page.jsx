"use client"


import Nav from "@/components/nav";
import Carousel from "@/components/homeCarousel";
import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="font-sans">
            <header className="relative w-full h-screen bg-cover bg-center" >

                <Nav />

                <Carousel />

                    {/* <div className="absolute top-1/3 left-1/4 text-white">
                <h2 className="text-4xl font-extrabold">No matter where you're going, we'll take you there</h2>
                <button className="mt-6 px-6 py-3 bg-primary rounded-full">Get in Touch</button>
                </div> */}

            </header>

            <section className="py-16 bg-gray-100">
                <div className="text-center mb-12">
                    <h3 className="text-primary font-bold">CATEGORY</h3>
                    <h2 className="text-3xl font-extrabold">We Offer Best Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <img src="/guided-tours-icon.png" alt="Guided Tours" className="mx-auto mb-4" />
                        <h4 className="text-lg font-bold">Guided Tours</h4>
                        <p className="text-gray-600">Explore with our expert guides.</p>
                    </div>
                    <div className="text-center">
                        <img src="/flights-icon.png" alt="Best Flights" className="mx-auto mb-4" />
                        <h4 className="text-lg font-bold">Best Flights Options</h4>
                        <p className="text-gray-600">Convenience and affordability.</p>
                    </div>
                    <div className="text-center">
                        <img src="/religious-tours-icon.png" alt="Religious Tours" className="mx-auto mb-4" />
                        <h4 className="text-lg font-bold">Religious Tours</h4>
                        <p className="text-gray-600">Cultural and spiritual journeys.</p>
                    </div>
                    <div className="text-center">
                        <img src="/insurance-icon.png" alt="Medical Insurance" className="mx-auto mb-4" />
                        <h4 className="text-lg font-bold">Medical Insurance</h4>
                        <p className="text-gray-600">Travel worry-free.</p>
                    </div>
                </div>
            </section>


            <footer className="py-8 bg-secondary text-black">
                <div className="text-center">&copy; 2025 NeemaBaraka. All rights reserved.</div>
            </footer>
        </div>
    );
}