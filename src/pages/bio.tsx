// src/pages/bio.tsx

import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import SubscribeForm from "@/components/SubscribeForm";
import ComicButton from "@/components/ComicButton";
import router from "next/router";
import Image from "next/image";

const BIO_URL = "https://159.89.233.75.nip.io/api/bio";

export default function BioPage() {
  const [bioHtml, setBioHtml] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // We'll use these to handle edge cases
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.search.includes("admin")
    ) {
      setIsAdmin(true);
    }

    fetch(BIO_URL)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
          setIsLoading(false);
          return null;
        }
        if (!res.ok) {
          throw new Error(`Failed to fetch bio. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data?.content) {
          setBioHtml(data.content);
        }
      })
      .catch((err) => {
        setError(err.message || "Error loading bio");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSaveBio = async () => {
    const token = localStorage.getItem("myAdminToken") || "";

    try {
      const response = await fetch(BIO_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

  // CHANGED: Instead of returning early for isLoading, error, or notFound,
  // we always render the main layout, and conditionally show the states
  return (
    <div className="min-h-screen flex flex-col bg-purple-50">
      <Head title="Marie’s Bio" description="Bio page for Marie" />
      <Nav />

      <div className="relative h-64 flex items-center justify-center bg-gradient-to-b from-[#6e7cc0] via-[#a5aed5] to-[#faf5ff]">
        <h1 className="text-4xl sm:text-5xl text-white"></h1> {/* About Me */}
      </div>

      <div className="flex-grow py-12">
        <div className="max-w-3xl mx-auto p-4 -mt-24 hover:-mt-64 transition-all duration-1000 ease-in-out">
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-lg p-8">
            {/* CHANGED: Show "Loading", "Error", or "Not Found" messages here */}
            {isLoading && <p className="text-gray-600">Loading bio...</p>}

            {error && <p className="text-red-600">Error: {error}</p>}

            {notFound && (
              <p className="text-gray-700 text-xl">
                No bio found in the database.
              </p>
            )}

            {/* If no error/notFound/loading, show either the raw HTML or the editing form */}
            {!isLoading &&
              !error &&
              !notFound &&
              !isAdmin &&
              (() => {
                const pMatches = bioHtml.match(/<p[^>]*>[\s\S]*?<\/p>/gi);
                const firstParagraph = pMatches?.[0] || "";
                const secondParagraph = pMatches?.[1] || "";
                const combined = `${firstParagraph}${secondParagraph}`;
                const remainingHtml = bioHtml.replace(combined, "");

                return (
                  <>
                    {/* First paragraph alone */}
                    <div
                      className="text-base sm:text-lg text-gray-800 font-serif leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{ __html: firstParagraph }}
                    />

                    {/* Flex layout: second paragraph + image */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-6 items-start">
                      <div
                        className="text-base sm:text-lg text-gray-800 font-serif leading-relaxed lg:w-2/3"
                        dangerouslySetInnerHTML={{ __html: secondParagraph }}
                      />
                      <div className="flex justify-center lg:justify-end w-full lg:w-1/3">
                        <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                          <Image
                            src="/images/bio-headshot.jpeg"
                            alt="Portrait of the author"
                            fill
                            className="rounded-full object-cover shadow-lg"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* Remaining content */}
                    <div
                      className="text-base sm:text-lg text-gray-800 font-serif leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: remainingHtml }}
                    />
                  </>
                );
              })()}

            {/* Bio Image */}
            {/*             <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/images/bio-headshot.jpeg"
                  alt="Portrait of the author"
                  fill
                  className="rounded-full object-cover shadow-lg"
                  priority
                />
              </div>
            </div> */}

            {!isLoading && !error && !notFound && isAdmin && (
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
