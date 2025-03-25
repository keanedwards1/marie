// src/pages/bio.tsx

import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import SubscribeForm from "@/components/SubscribeForm";
import ComicButton from "@/components/ComicButton";
import router from "next/router";

const BIO_URL = "https://159.89.233.75.nip.io/api/bio";

export default function BioPage() {
  // We store the entire bio as raw HTML in this string
  const [bioHtml, setBioHtml] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // We'll use these to handle edge cases
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    // 1) Check if URL has ?admin for editing
    if (
      typeof window !== "undefined" &&
      window.location.search.includes("admin")
    ) {
      setIsAdmin(true);
    }

    // 2) Fetch the bio from server
    fetch(BIO_URL)
      .then((res) => {
        if (res.status === 404) {
          // The DB might not have a 'bio' row yet
          setNotFound(true);
          setIsLoading(false);
          return null; // end
        }
        if (!res.ok) {
          throw new Error(`Failed to fetch bio. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data?.content) {
          // The 'content' is raw HTML. We'll store it in state
          setBioHtml(data.content);
        }
      })
      .catch((err) => {
        // If anything else fails, show an error
        setError(err.message || "Error loading bio");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Admin action: Save the updated HTML
  const handleSaveBio = async () => {
    // Usually you'd get the token from localStorage or context, e.g.:
    const token = localStorage.getItem("myAdminToken") || "";

    try {
      const response = await fetch(BIO_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // must have admin token
        },
        // Just send the raw HTML in "content"
        body: JSON.stringify({ content: bioHtml }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update bio. Status: ${response.status}`);
      }

      alert("Bio successfully updated!");
    } catch (err) {
      console.error("Error updating bio:", err);
      alert("Error updating bio.");
    }
  };

  // Render
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading bio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col">
        <Head title="Marie’s Bio" description="Bio page not found" />
        <Nav />
        <div className="flex-grow flex items-center justify-center bg-purple-50">
          <p className="text-gray-700 text-xl">No bio found in the database.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-purple-50">
      <Head title="Marie’s Bio" description="Bio page for Marie" />
      <Nav />

      {/* Hero / Heading */}
      <div className="relative h-64 flex items-center justify-center bg-gradient-to-b from-[#6e7cc0] via-[#a5aed5] to-[#faf5ff]">
        <h1 className="text-4xl sm:text-5xl text-white">About Me</h1>
      </div>

      {/* Shape Divider */}
      {/*     <div className="overflow-hidden leading-none">
        <svg className="block w-full h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.35C190.52,65.87,84.66,92.39,
               0,108.09V120H1200V0C1115.34,6.73,
               1009.48,21.75,853.61,44.41,
               676.16,70.27,491.53,47.11,
               321.39,56.35Z"
            fill="#fff"
          />
        </svg>
      </div> */}

      {/* Bio Card */}
      <div className="flex-grow py-12">
        <div className="max-w-3xl mx-auto p-4">
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-lg p-8">
            {/* If we have raw HTML, we display with dangerouslySetInnerHTML
                so that <p> tags, etc. show up properly */}
            {!isAdmin && (
              <div
                className="text-base sm:text-lg text-gray-800 font-serif leading-relaxed"
                dangerouslySetInnerHTML={{ __html: bioHtml }}
              />
            )}

            {/* If admin, we let user directly edit the raw HTML */}
            {isAdmin && (
              <div>
                <label className="block mb-2 text-gray-600">
                  Edit Raw HTML for Bio:
                </label>
                <textarea
                  rows={10}
                  className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  value={bioHtml}
                  onChange={(e) => setBioHtml(e.target.value)}
                />

                <button
                  onClick={handleSaveBio}
                  className="comic-button px-4 py-2"
                >
                  Save Bio
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <section className="my-12 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
          <ComicButton
            label="← Back to Home 🏡"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
          <ComicButton
            label="📚 Read Blog →"
            onClick={() => router.push("/blog")}
            className="home-comic-button"
          />
        </div>
      </section>

      <SubscribeForm />
      <Footer />
    </div>
  );
}
