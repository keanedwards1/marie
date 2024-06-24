import Link from 'next/link';
/* import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image'; // Import the Image component */

export default function Nav() {
  return (
    <nav className="navbar bg-base-100 shadow-md p-4 flex justify-between">
      <div className="">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Marie
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 bg-base-100">
          <li>
            <Link className="nav-menu-button" href="/">Home</Link>
          </li>
          <li>
            <Link className="nav-menu-button" href="/characters">Characters</Link>
          </li>
          <li>
            <Link className="nav-menu-button" href="/short-stories">Short Stories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
