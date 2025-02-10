import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p className="text-sm">
              NeemaBaraka is dedicated to providing innovative solutions and exceptional service to our clients.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-sm hover:text-orangered hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm hover:text-orangered hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm hover:text-orangered hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-orangered hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-sm">
              123 Main Street
              <br />
              City, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@neemabaraka.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook size={24} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Twitter size={24} />
              </a> */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Instagram size={24} />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Linkedin size={24} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} NeemaBaraka. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

