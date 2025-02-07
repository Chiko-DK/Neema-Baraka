"use client"


import Nav from "@/components/nav";
import Carousel from "@/components/homeCarousel";
import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';
import Image from "next/image";
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

            <section id="services" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-extrabold mb-8 text-center">We Offer Best Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                        title: "Custom Itineraries",
                        description: "Tailored travel plans designed to match your interests and preferences.",
                        },
                        {
                        title: "Luxury Accommodations",
                        description: "Access to exclusive hotels and resorts around the world.",
                        },
                        {
                        title: "Guided Tours",
                        description: "Expert-led excursions to immerse you in local culture and history.",
                        },
                    ].map((service, index) => (
                        <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-md p-6"
                        >
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </section>

            {/* <section className="py-16 bg-gray-100">
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
            </section> */}

            <section id="about" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">About Neema Baraka</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                        src="/chillguy.jpg"
                        alt="Nehema Baraka"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-md"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-600 mb-4">
                        Neema Baraka is a passionate travel expert with years of experience in crafting unforgettable
                        journeys. Her deep knowledge of global destinations and commitment to personalized service ensure that
                        every trip is tailored to your unique preferences and desires.
                        </p>
                        <p className="text-gray-600">
                        Whether you're seeking adventure, relaxation, or cultural immersion, Neema Baraka is dedicated to turning
                        your travel dreams into reality. Let her expertise guide you to the world's most captivating
                        destinations.
                        </p>
                    </motion.div>
                    </div>
                </div>
            </section>


            <footer className="py-8 bg-secondary text-black">
                <div className="text-center">&copy; 2025 NeemaBaraka. All rights reserved.</div>
            </footer>
        </div>
    );
}