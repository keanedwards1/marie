import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar p-4 z-40 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <Link
          href="/"
          className="btn background-transparent normal-case text-2xl text-slate-800 font-serif"
        >
          <Image
            src="/android-chrome-192x192.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          A Book Launch 🦋 {" "}
        </Link>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
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
              ? "h-[200px] opacity-100"
              : "h-0 opacity-0 lg:h-auto lg:opacity-100"
          }
          overflow-hidden
          flex flex-col items-end lg:flex-row lg:items-center
        `}
      >
        <ul className="menu menu-vertical lg:menu-horizontal p-0 mt-4 lg:mt-0 w-full lg:flex lg:space-x-0 mr-20">
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/landscape"
            >
              Landscape
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/luminoles"
            >
              Luminoles
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/short-stories"
            >
              Short Stories
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right font-serif lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/short-stories"
            >
              Offerings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
