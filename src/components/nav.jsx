"use client"

// import Link from "next/link";
// import Image from "next/image";

// const nav = () => {
//   return (
//     <div className="font-sans p-20">
//         <nav className="flex items-center justify-around p-4">
//             <h1 className="text-2xl font-bold text-white">NeemaBaraka</h1>
//             <ul className="flex gap-4 text-white">
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/services">Services</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//             </ul>
//         </nav>

//     </div>
//   )
// }

// export default nav

import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div
      className={`font-sans p-10 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-sky-900 bg-opacity-90" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-around">
        <h1 className="text-2xl font-bold text-white">NeemaBaraka</h1>
        <ul className="flex gap-4 text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
