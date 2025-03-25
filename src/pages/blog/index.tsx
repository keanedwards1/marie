// src/pages/blog/index.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";
import SubscribeForm from "@/components/SubscribeForm";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  created_at: number;
  updated_at: number;
}

// Helper function to strip HTML tags for the excerpt
function stripHtml(html: string): string {
  return (
    html
      // Give headings some space
      .replace(/<h[1-3][^>]*>/gi, "\n\n")
      .replace(/<\/h[1-3]>/gi, "\n\n")
      // Paragraphs
      .replace(/<p[^>]*>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      // Line breaks
      .replace(/<br\s*\/?>/gi, "\n")
      // Lists
      .replace(/<li[^>]*>/gi, "• ")
      .replace(/<\/li>/gi, "\n")
      .replace(/<\/?ul[^>]*>/gi, "\n\n")
      .replace(/<\/?ol[^>]*>/gi, "\n\n")
      // Remove all other tags
      .replace(/<[^>]+>/g, "")
      // Clean up multiple blank lines
      .replace(/\n{2,}/g, "\n\n")
      .trim()
  );
}

// CHANGED: Function to decode HTML entities (e.g., &nbsp;, &amp;)
function decodeHtmlEntities(str: string): string {
  if (typeof document !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }
  return str;
}

export default function BlogIndex() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://159.89.233.75.nip.io/api/blog/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError("Error fetching blog posts.");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#dbe1f9c5]">
      <Nav />
      <div className="max-w-4xl mx-auto w-full p-4 flex-1">
        <h1 className="text-5xl font-playfair text-center mt-6 mb-10 font-bold text-[#39383c]">
          The Realm Of Unity&apos;s Blog
        </h1>
        {loading && <p className="text-center mb-6">Loading posts...</p>}
        {error && <p className="text-center text-[#4458adc5] mb-6">{error}</p>}
        {!loading &&
          !error &&
          posts.map((post) => {
            // CHANGED: Create an excerpt by stripping HTML, decoding HTML entities, and taking the first 150 characters
            const plainContent = stripHtml(post.content);
            const decodedContent = decodeHtmlEntities(plainContent);
            const excerpt =
              decodedContent.length > 150
                ? decodedContent.substring(0, 150) + "..."
                : decodedContent;
            return (
              <div key={post.id} className="bg-[#fffaf4] p-6 rounded-xl mb-8">
                <h2 className="text-3xl font-semibold mb-3 text-[#4458adc5]">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  By {post.author} on {post.date}
                </p>
                <p className="text-lg text-[#3f3d3b] mb-4">{excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-3 inline-block bg-[#4458adc5] hover:bg-[#3f4f95c5] text-white px-4 py-2 rounded transition-colors"
                >
                  Read More
                </Link>
              </div>
            );
          })}
      </div>
      <div className="mt-36 -mb-20 flex flex-col lg:flex-row w-full z-10 gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
          <ComicButton
            label="← See Bio 📖"
            onClick={() => router.push("/bio")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
          <ComicButton
            label="🧚‍♂️ View Luminoles → "
            onClick={() => router.push("/luminoles")}
          />
        </div>
      </div>

      <div className="">
        <SubscribeForm />
      </div>

      <div className="bg-grey">
        <Footer />
      </div>
    </div>
  );
}

/* WITH API */
/* // CHANGED: New "Blog Index" page (Substack-like layout with SSR)
import React from "react";
import Link from "next/link";

// CHANGED: We'll assume you have Nav and Footer in ../components/
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  excerpt: string;
  comments: Array<{
    id: number;
    author: string;
    text: string;
  }>;
}

// CHANGED: We fetch from the server (SSR)
export async function getServerSideProps() {
  // Replace "localhost:3000" with your actual host if needed
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

// CHANGED: Banner component inspired by Substack
function SubscribeBanner() {
  return (
    <div
      className="rounded-xl text-white p-6 text-center my-8"
      style={{ backgroundColor: "#4458adc5" }}
    >
      <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
      <p className="mb-4">Get the latest posts delivered right to your inbox!</p>
      <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded">
        Subscribe Now
      </button>
    </div>
  );
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#eef1f6" }} // CHANGED: Light page background
    >
      <Nav />

      <div className="max-w-4xl mx-auto w-full p-4 flex-1">
        <h1 className="text-5xl font-playfair text-center mt-6 mb-10 font-bold text-gray-800">
          Our Blog
        </h1>

        <SubscribeBanner />

        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg p-6 rounded-xl mb-8"
          >
            <h2 className="text-3xl font-semibold mb-3">
              <Link href={`/blog/${post.id}`}>
                <a className="hover:underline">{post.title}</a>
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              By {post.author} on {post.date}
            </p>
            <p className="text-lg text-gray-800 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <a
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                style={{ backgroundColor: "#4458adc5" }} // CHANGED
              >
                Read More
              </a>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
 */
