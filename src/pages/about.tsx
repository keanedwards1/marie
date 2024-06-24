// src/pages/about.tsx
import Nav from '../components/Nav';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">About Page</h1>
        <p className="mt-4 text-lg">
          This is the about page of your Next.js application.
        </p>
      </div>
    </div>
  );
}
