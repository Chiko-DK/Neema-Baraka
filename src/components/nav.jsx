"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, X} from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled down at least 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div
      className={`font-sans p-10 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-sky-900 bg-opacity-90" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-around">
        <img
          src="/logo.png"
          alt="Nehema Baraka"
          width={250}
          height={250}
        />
        

        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 text-white">
          <li>
            <Link href="/#home">Home</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sky-900 bg-opacity-90">
          <ul className="flex flex-col items-center py-4 text-white">
            <li className="py-2">
              <Link href="/#home" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link href="/#services" onClick={toggleMobileMenu}>
                Services
              </Link>
            </li>
            <li className="py-2">
              <Link href="/#about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
