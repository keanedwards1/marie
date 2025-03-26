import React from "react";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import Image from "next/image";
// Import the Simple Icons from React Icons
import {
  SiFacebook,
  SiGitter,
  SiInstagram,
  SiSubstack,
} from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-4 pb-4 bg-lavender-50 text-lavender-800">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-lavender-50" />
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  href="/bio"
                  className="hover:text-lavender-600 transition duration-300"
                >
                  Bio
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
            </ul>
          </div>

          {/* About Section */}
          <div className="footer-card">
            <h3 className="text-lg font-serif font-semibold mb-4 text-lavender-900">
              About The Author
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <p className="text-md font-serif leading-relaxed">
                V. M. Elyse (Marie) is a spiritual seeker and lover of truth.
                She lives in Northern California with her family, and this is
                her offering to the world. The Realm of Unity is her first book,
                but not her last. It is her most fervent wish that this book
                brings more light, love and healing into this ailing world.
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
        </div>

        {/* Social Media Links */}
        <div className="mt-4 text-center">
          <div className="rounded-lg p-4">
            <h3 className="text-lg font-serif font-semibold text-lavender-900">
              Please share my site with your friends and help me spread the
              word!
            </h3>
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            {/* FACEBOOK */}
            <div className="relative group">
              <a
                href="https://www.facebook.com/venus.elyse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c84d9] hover:text-[#b3baf1] transition duration-300"
                aria-label="Facebook"
              >
                <SiFacebook size={24} />
              </a>
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-sm text-white bg-[#2d2d2d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Facebook
              </span>
            </div>

            {/* TWITTER */}
            {/* <div className="relative group">
              <a
                href="#"
                className="text-[#7c84d9] hover:text-[#b3baf1] transition duration-300"
                aria-label="Twitter"
              >
                <SiGitter size={24} />
              </a>
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-sm text-white bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Twitter
              </span>
            </div> */}

            {/* INSTAGRAM */}
            <div className="relative group">
              <a
                href="https://www.instagram.com/vmelyse7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c84d9] hover:text-[#b3baf1] transition duration-300"
                aria-label="Instagram"
              >
                <SiInstagram size={24} />
              </a>
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-sm text-white bg-[#2d2d2d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </span>
            </div>

            {/* SUBSTACK */}
            <div className="relative group">
              <a
                href="https://substack.com/@vmelyse?utm_source=user-menu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c84d9] hover:text-[#b3baf1] transition duration-300"
                aria-label="Substack"
              >
                <SiSubstack size={24} />
              </a>
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-sm text-white bg-[#2d2d2d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Substack
              </span>
            </div>
          </div>
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
