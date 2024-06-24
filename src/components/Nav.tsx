// src/components/Nav.tsx
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/characters">Characters</Link>
        </li>
        <li>
          <Link href="/short-stories">Short Stories</Link>
        </li>
      </ul>
    </nav>
  );
}
