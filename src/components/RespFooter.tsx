import React from "react";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 bg-lavender-50 text-lavender-800">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-lavender-50"></div>
      <div className="container relative mx-auto px-4">
        {/* Rest of the footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              About Us
            </h3>
            <p className="text-sm leading-relaxed">
              I&apos;m passionate about creating engaging stories and
              characters. My mission is to inspire and entertain through the
              power of storytelling.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              Contact Me
            </h3>
            <ul className="text-sm space-y-2">
              <li>Email: marie@marie.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 marie ave, antarctica, NP 12345</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/characters"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link
                  href="/short-stories"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Short Stories
                </Link>
              </li>
              {/*               <li>
                <Link href="/about" className="hover:text-lavender-600 transition duration-300">
                  About
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              Stay Updated
            </h3>
            <SubscribeForm />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
            Please share my site with your friends and help me spread the word!
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-2xl text-lavender-700 hover:text-lavender-500 transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-2xl text-lavender-700 hover:text-lavender-500 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-2xl text-lavender-700 hover:text-lavender-500 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-2xl text-lavender-700 hover:text-lavender-500 transition duration-300"
            >
              <i className="fab fa-goodreads"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-lavender-700">
          <p>
            &copy; {new Date().getFullYear()} Marie Lastname. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
