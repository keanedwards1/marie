import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import React from "react";
import { useRouter } from "next/router"; // Import useRouter
import ComicButton from "../components/ComicButton";

export default function Home() {
  const router = useRouter(); // Initialize router
  return (
    <div className="min-h-screen bg-base-100">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold flex justify-center">
          A book launch
        </h1>
        <p className="mt-4 text-lg flex justify-center">
          Describing the book/where the idea for it came from/what the visitor
          of your site can hope to gain from being here.
        </p>
        <div className="min-h-40 flex items-center justify-center">
          <ComicButton
            label="see stories"
            onClick={() => router.push("/short-stories")}
          />
        </div>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
