// src/pages/blog/index.tsx

import React from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";

// Hardcoded mock data (replace with API later)
const mockPosts = [
  {
    id: 1,
    title: "Welcome to The Realm of Unity",
    content: `Ever wonder what a magical world would look like? Welcome to The Realm of Unity—a place where imagination, adventure, and wonder converge...`,
    author: "V. M. Elyse",
    date: "March 10, 2025",
    excerpt: "Step into a world of magic, adventure, and ancient secrets...",
    comments: [
      { id: 101, author: "Anonymous", text: "I love this book, my favorite character is Alfred." },
      { id: 102, author: "Cara Parker", text: "What are the best places to go in the realm of unity?" },
    ],
  },
  {
    id: 2,
    title: "Whose Hat Was It Anyway?",
    content: `A hat is just a hat—until it isn't...`,
    author: "The Cat In The Hat",
    date: "March 11, 2025",
    excerpt: "A mysterious hat appears—who did it belong to, and what’s its story?",
    comments: [
      { id: 103, author: "Sam Knight", text: "What's the cat in the hat doing here?" },
      { id: 104, author: "Sara Moore", text: "Is this a cat in a hat?" },
    ],
  },
  {
    id: 3,
    title: "How to Make a Perfect Loaf of Bread",
    content: `Baking bread is both an art and a science...`,
    author: "Aspen",
    date: "March 12, 2025",
    excerpt: "Learn the art of baking the perfect homemade bread.",
    comments: [
      { id: 105, author: "Ben Sorenson", text: "Actually a good recipe." },
      { id: 106, author: "Abby Simpson", text: "Not saying it's magical, but it's magical." }
    ],
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#dbe1f9c5]">
      <Nav />

      <div className="max-w-4xl mx-auto w-full p-4 flex-1">
        <h1 className="text-5xl font-playfair text-center mt-6 mb-10 font-bold text-[#39383c]">
          The Realm Of Unity&apos;s Bulletin Board
        </h1>

        {mockPosts.map((post) => (
          <div key={post.id} className="bg-[#fffaf4] p-6 rounded-xl mb-8">
            <h2 className="text-3xl font-semibold mb-3 text-[#4458adc5]">
              <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="text-sm text-gray-500 mb-2">
              By {post.author} on {post.date}
            </p>

            <p className="text-lg text-[#3f3d3b] mb-4">{post.excerpt}</p>

            {/* Display Top Comments (if available) */}
            {post.comments.length > 0 && (
              <div className="bg-[#f9f8ff] shadow-inner p-3 rounded-lg text-gray-700">
                <h4 className="font-semibold mb-1 text-[#3f3d3b]">Comments:</h4>
                {post.comments.slice(0, 2).map((comment) => (
                  <p key={comment.id} className="text-sm">
                    <span className="font-bold">{comment.author}:</span>{" "}
                    {comment.text.length > 50
                      ? `${comment.text.substring(0, 50)}...`
                      : comment.text}
                  </p>
                ))}
              </div>
            )}

            <Link
              href={`/blog/${post.id}`}
              className="mt-3 inline-block bg-[#4458adc5] hover:bg-[#3f4f95c5] text-white px-4 py-2 rounded transition-colors"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      <Footer />
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