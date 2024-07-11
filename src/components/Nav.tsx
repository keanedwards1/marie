import Link from "next/link";
import { useState, useEffect } from "react";

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
    <nav className="navbar p-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="nav-menu-main-button btn btn-ghost normal-case text-xl">
          The Realm of Unity
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
            className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 -translate-y-1 translate-x-2' : ''}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16"
          />
          <path
            className={`transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12h16"
          />
          <path
            className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-1 -translate-x-2' : ''}`}
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
              ? "h-[120px] opacity-100"
              : "h-0 opacity-0 lg:h-auto lg:opacity-100"
          }
          overflow-hidden
          flex flex-col items-end lg:flex-row lg:items-center
        `}
      >
        <ul className="menu menu-vertical lg:menu-horizontal p-0 mt-4 lg:mt-0 w-full lg:flex lg:space-x-0 mr-20">
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/"
            >
              Gallery
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/characters"
            >
              Characters
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/short-stories"
            >
              Short Stories
            </Link>
          </li>
          <li className="w-full lg:w-auto">
            <Link
              className="nav-menu-button text-right lg:text-left w-full lg:w-auto justify-end lg:justify-start"
              href="/short-stories"
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
