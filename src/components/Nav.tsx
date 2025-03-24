// src/components/Nav.tsx

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Import the Image component

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1060) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the current page
  const isLandscapePage = router.pathname === "/landscape";
  const isHomePage = router.pathname === "/";

  // Set the navTitle based on the current route
  let navTitle = "The Realm of Unity Book";
  if (router.pathname === "/landscape") {
    navTitle = "The Realm of Unity Landscape";
  } else if (router.pathname === "/luminoles") {
    navTitle = "The Realm of Unity Characters";
  } else if (router.pathname === "/short-stories") {
    navTitle = "The Realm of Unity Short Stories";
  } else if (router.pathname === "/reviews") {
    navTitle = "The Realm of Unity Reviews";
  }

  return (
    <nav className="navbar p-4 z-50 sticky top-0 bg-white bg-opacity-90 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <Link
          href="/"
          className={`btn background-transparent normal-case sm:text-lg md:text-2xl font-serif flex items-center`}
        >
          <Image
            src="/android-chrome-192x192.png"
            alt="Logo"
            width={24} // Adjust the width as needed
            height={24} // Adjust the height as needed
            priority
          />
          <span className="ml-1 font-thin nav-title">{navTitle}</span>
        </Link>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-sky-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 -translate-y-1 translate-x-2" : ""
            }`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16"
          />
          <path
            className={`transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12h16"
          />
          <path
            className={`transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 translate-y-1 -translate-x-2" : ""
            }`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`
          lg:flex lg:items-center w-full lg:w-auto
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "h-[220px] opacity-100"
              : "h-0 opacity-0 lg:h-auto lg:opacity-100"
          }
          overflow-hidden
          flex flex-col items-end lg:flex-row lg:items-center
        `}
      >
        <ul className="menu menu-vertical lg:menu-horizontal p-0 mt-4 lg:mt-0 w-full lg:flex lg:space-x-0 mr-20">
          <li className="w-full lg:w-auto">
            <Link
              className={`text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start nav-menu-button`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className={`text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start nav-menu-button`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className={`text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start nav-menu-button`}
              href="/luminoles"
            >
              Luminoles
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className={`text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start nav-menu-button`}
              href="/short-stories"
            >
              Short Stories
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className={`text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start nav-menu-button`}
              href="/reviews"
            >
              Reviews
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className={`text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start nav-menu-button`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
