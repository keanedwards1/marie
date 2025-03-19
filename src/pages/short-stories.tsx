// src/pages/short-stories.tsx

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import ShortStoryCard from "../components/ShortStoryCard";
import Footer from "../components/RespFooter";
import ComicButton from "@/components/ComicButton";
import SubscribeForm from "@/components/SubscribeForm";

const SERVER_URL = "https://159.89.233.75.nip.io";

export default function ShortStoriesPage() {
  const router = useRouter();
  const [stories, setStories] = useState<any[]>([]);
  const subscribeFormRef = useRef<HTMLDivElement>(null);

  const scrollToSubscribeForm = () => {
    if (subscribeFormRef.current) {
      subscribeFormRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Fetch short stories from the backend on component mount
    fetch(`${SERVER_URL}/api/short-stories`)
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching short stories:", err));
  }, []);

  return (
    <div className="min-h-screen bg-purple-50 relative">
      <Nav />
      <div className="container mx-auto p-4">
        {/* You can uncomment or adjust the title as needed */}
        {/* <h1 className="text-4xl text-slate-800 font-serif font-bold">Short Stories</h1> */}
        <p className="mt-4 mb-3 text-3xl text-center text-black font-serif font-medium stretched-text-05">
          Coming 2025
        </p>
        <p className="mt-2 mb-4 text-base text-slate-900 text-center font-serif">
          Luminoles you met in the <span className="font-semibold">Realm of Unity</span>
          <br />
          share <span className="italic">intimate</span> details of their adventures.
          <br />
          <span className="font-semibold">Subscribe to receive updates</span>
        </p>

        {/* Subscribe Button */}
        <div className="flex justify-center mt-2 mb-8">
          <button
            onClick={scrollToSubscribeForm}
            className="subscribe-button bg-[#4458adc5] hover:bg-[#5063b7c5] text-white py-1 px-5 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Subscribe
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
          {stories.map((story) => (
            <ShortStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
      <div className="mt-20 mb-16 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="← See Luminoles 🧚‍♂️"
            onClick={() => router.push("/luminoles")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="🕊️ View Reviews → "
            onClick={() => router.push("/reviews")}
          />
        </div>
      </div>

      <div ref={subscribeFormRef} id="short-stories-subscribe-form">
        <SubscribeForm />
      </div>

      {/* Scroll back to top */}
      <div className="w-full flex justify-center bg-white">
        <button
          onClick={scrollToTop}
          className="text-slate-900 font-thin transition-all ease-in hover:font-extralight"
        >
          Back to Top
        </button>
      </div>

      <Footer />
    </div>
  );
}
