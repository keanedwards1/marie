import React from "react";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-4 pb-4 bg-lavender-50 text-lavender-800">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-lavender-50"></div>
      <div className="container relative mx-auto px-4">
        {/* Rest of the footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        

          {/* Contact Information */}
          {/*           <div className="footer-card">
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              Contact Me
            </h3>
            <ul className="text-m font-serif space-y-2">
              <li> Email: <a href="mailto:vmelyse@gmail.com" className="hover:text-lavender-600 transition duration-300">vmelyse@gmail.com</a></li>
            </ul>
          </div> */}

          {/* Quick Links */}
          <div className="footer-card">
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              Quick Links
            </h3>
            <ul className="text-m font-serif space-y-2">
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
                  href="/blog"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/luminoles"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Luminoles
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
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Contact
                </Link>
              </li>
              {/*               <li>
                <Link href="/about" className="hover:text-lavender-600 transition duration-300">
                  About
                </Link>
              </li> */}
            </ul>
          </div>


                    {/* About Section */}
                    <div className="footer-card">
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              About The Author
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <p className="text-md font-serif leading-relaxed">
                V. M. Elyse (Marie) is a spiritual seeker and lover of truth. She
                lives in Northern California with her family, and this is her
                offering to the world. The Realm of Unity is her first book, but
                not her last. It is her most fervent wish that this book brings
                more light, love and healing into this ailing world.
              </p>
              <div className="flex w-full justify-center items-center md:mr-4 mb-4">
                <Image
                  className="rounded-xl"
                  src="/images/vmelyse.jpg"
                  width={144}
                  height={169}
                  alt="Picture of the Author V.M. Elyse"
                />
              </div>
            </div>
          </div>

          {/* Subscribe Form */}
          {/*           <div className="footer-card col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              Stay Updated
            </h3>
            <SubscribeForm />
          </div> */}
        </div>

        {/* Social Media Links */}
        <div className="mt-4 text-center">
          <div className="rounded-lg p-4">
            <h3 className="text-lg font-serif font-semibold text-lavender-900">
              Please share my site with your friends and help me spread the
              word!
            </h3>
          </div>

          {/*           <div className="flex justify-center space-x-6">
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
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-2 text-center text-sm footer-copyright mb-10 p-2 rounded-lg text-lavender-700">
          <p>
            &copy; {new Date().getFullYear()} V. M. Elyse &nbsp; ~ &nbsp; All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
