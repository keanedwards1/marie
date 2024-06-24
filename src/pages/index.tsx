// src/pages/index.tsx
import Nav from "../components/Nav";
import React from "react";
import { useRouter } from 'next/router'; // Import useRouter
import ComicButton from "../components/ComicButton";

export default function Home() {
  const router = useRouter(); // Initialize router
  return (
    <div className="min-h-screen bg-base-100">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold flex justify-center">Title Page</h1>
        <p className="mt-4 text-lg flex justify-center">Brief description of the book.</p>
        <div className="min-h-screen flex items-center justify-center">
          <ComicButton label="Click me!" onClick={() => router.push('/short-stories')} />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>Email: example@example.com</p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Sign Up for Updates</h2>
          <form className="form-control">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered"
            />
            <button type="submit" className="mt-2 btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
