// src/pages/blog/[id].tsx

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";
import { M_PLUS_1 } from "next/font/google";

// Define interfaces matching your DB structure
interface Comment {
  id: number;
  post_id: number;
  author: string;
  text: string;
  likes: number;
  created_at: number;
}

interface Post {
  id: number;
  title: string;
  content: string;  // HTML content
  author: string;
  date: string;
  likes: number;
  created_at: number;
  updated_at: number;
  comments: Comment[];
}

export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;

  // State to hold the post data
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // For the new comment text
  const [newComment, setNewComment] = useState<string>("");

  // Track if user has liked the post or not (once per localStorage)
  const [postLiked, setPostLiked] = useState<boolean>(false);
  // Track which comments the user has liked (by commentId)
  const [commentLiked, setCommentLiked] = useState<Record<number, boolean>>({});

  // Fetch post data from server
  useEffect(() => {
    if (!id) return;
    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`https://159.89.233.75.nip.io/api/blog/posts/${id}`);
        if (!res.ok) {
          throw new Error("Post not found");
        }
        const data: Post = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  // Load localStorage flags for postLiked & commentLiked
  useEffect(() => {
    if (!id) return;
    const savedPostLiked = localStorage.getItem(`postLiked-${id}`);
    if (savedPostLiked === "true") {
      setPostLiked(true);
    }
    const savedCommentLiked = localStorage.getItem(`commentLiked-${id}`);
    if (savedCommentLiked) {
      setCommentLiked(JSON.parse(savedCommentLiked));
    }
  }, [id]);

  // Persist postLiked in localStorage
  useEffect(() => {
    if (!id) return;
    localStorage.setItem(`postLiked-${id}`, postLiked.toString());
  }, [postLiked, id]);

  // Persist commentLiked in localStorage
  useEffect(() => {
    if (!id) return;
    localStorage.setItem(`commentLiked-${id}`, JSON.stringify(commentLiked));
  }, [commentLiked, id]);

  // Handle "like once" for the post
  async function handleLikePost() {
    if (!post) return;
    if (postLiked) {
      console.log("User already liked this post.");
      return;
    }
    try {
      const res = await fetch(
        `https://159.89.233.75.nip.io/api/blog/posts/${post.id}/like`,
        { method: "POST" }
      );
      if (!res.ok) {
        throw new Error("Failed to like post");
      }
      setPost((prev) => {
        if (!prev) return null;
        return { ...prev, likes: prev.likes + 1 };
      });
      setPostLiked(true);
    } catch (err) {
      console.error(err);
      alert("Error liking post.");
    }
  }

  // Handle "like once" for comments
  async function handleLikeComment(commentId: number) {
    if (!post) return;
    if (commentLiked[commentId]) {
      console.log("User already liked this comment:", commentId);
      return;
    }
    try {
      const res = await fetch(
        `https://159.89.233.75.nip.io/api/blog/comments/${commentId}/like`,
        { method: "POST" }
      );
      if (!res.ok) {
        throw new Error("Failed to like comment");
      }
      setPost((prev) => {
        if (!prev) return null;
        const updatedComments = prev.comments.map((c) =>
          c.id === commentId ? { ...c, likes: c.likes + 1 } : c
        );
        return { ...prev, comments: updatedComments };
      });
      setCommentLiked((prev) => ({ ...prev, [commentId]: true }));
    } catch (err) {
      console.error(err);
      alert("Error liking comment.");
    }
  }

  // Handle adding a new comment
  async function handleAddComment() {
    if (!newComment.trim() || !post) return;
    try {
      const res = await fetch(
        `https://159.89.233.75.nip.io/api/blog/posts/${post.id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            author: "Guest",
            text: newComment.trim(),
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to add comment");
      }
      const data = await res.json();
      const newCommentObj: Comment = {
        id: data.commentId,
        post_id: post.id,
        author: "Guest",
        text: newComment.trim(),
        likes: 0,
        created_at: Date.now(),
      };
      setPost((prev) => {
        if (!prev) return null;
        return { ...prev, comments: [...prev.comments, newCommentObj] };
      });
      setNewComment("");
    } catch (err) {
      console.error(err);
      alert("Error adding comment.");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Nav />
        <p className="text-xl">Loading post...</p>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Nav />
        <p className="text-xl text-red-500">Error: {error || "Post not found."}</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Nav />
      <div className="max-w-4xl mx-auto w-full p-4 flex-1">
        <div className="mb-4">
          <Link href="/blog" className="text-gray-700 hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">By {post.author} on {post.date}</p>
        <div
          className="text-lg text-gray-800 space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {/* Post Like Button with original color animation */}
        <div className="mt-6 flex items-center">
          <div
            className={`flex items-center rounded py-1 px-2 transition ${
              postLiked ? "bg-[#1b1b1bc5] text-white" : "bg-slate-200 text-gray-700"
            }`}
          >
            <span className="text-xl mr-3 pl-2">{post.likes}</span>
            <button
              onClick={handleLikePost}
              className="relative w-10 h-10 focus:outline-none active:scale-125 transition-transform"
            >
              <svg
                className={`w-8 h-8 transition-transform hover:scale-110 -mb-2 ${
                  postLiked ? "fill-white" : "fill-[#1b1b1bc5]"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12.76 3.36c1.48-1.62 3.91-1.62 5.39 0 1.73 1.91 1.71 4.98-.06 6.86l-6.59 7.19-6.59-7.19c-1.77-1.88-1.79-4.96-.06-6.86 1.48-1.62 3.91-1.62 5.39 0l1.26 1.37 1.26-1.37z" />
              </svg>
            </button>
          </div>
          {postLiked && (
            <span className="ml-3 text-sm text-green-600"></span>
          )}
        </div>
        {/* Comments Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1b1b1bc5]">Comments</h3>
          {post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="border-b py-2 flex justify-between items-center">
                <p className="text-sm flex-1 text-[#1b1b1bc5] mr-4">
                  <span className="font-bold">{comment.author}:</span> {comment.text}
                </p>
                {/* Comment Like Button */}
                <div className={`flex items-center rounded py-1 px-2 transition bg-gray-100 text-gray-800 ${
                  commentLiked[comment.id] ? "bg-[#1b1b1bc5] text-white" : "bg-gray-100"}`}>
                  <span className="text-sm mr-2">{comment.likes}</span>
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="relative w-6 h-6 focus:outline-none active:scale-125 transition-transform"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform -mb-1 hover:scale-110 ${
                        commentLiked[comment.id] ? "fill-white" : "fill-[#1b1b1bc5]"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.76 3.36c1.48-1.62 3.91-1.62 5.39 0 1.73 1.91 1.71 4.98-.06 6.86l-6.59 7.19-6.59-7.19c-1.77-1.88-1.79-4.96-.06-6.86 1.48-1.62 3.91-1.62 5.39 0l1.26 1.37 1.26-1.37z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first!</p>
          )}
          {/* Add Comment Form */}
          <div className="mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="border text-[#1b1b1bc5] border-gray-300 p-2 rounded w-full"
            />
            <button
              onClick={handleAddComment}
              className="mt-2 bg-[#4458adc5] hover:bg-[#3f4f95c5] text-white px-4 py-2 rounded"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}




/* With API:↓ */

/* // CHANGED: Single Post page with server-side data & comments
import React, { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";

interface Comment {
  id: number;
  author: string;
  text: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  excerpt: string;
  comments: Comment[];
}

interface Props {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}

// CHANGED: getServerSideProps fetches all posts, finds the requested one, determines prev/next
export async function getServerSideProps(context: any) {
  const { id } = context.params;

  // fetch all posts from our in-memory API
  const res = await fetch("http://localhost:3000/api/posts");
  const allPosts: Post[] = await res.json();

  const postId = parseInt(id, 10);
  const post = allPosts.find((p) => p.id === postId);

  if (!post) {
    return {
      notFound: true, // 404 if post doesn’t exist
    };
  }

  // figure out next/prev
  const currentIndex = allPosts.findIndex((p) => p.id === postId);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return {
    props: { post, prevPost, nextPost },
  };
}

export default function SinglePost({ post, prevPost, nextPost }: Props) {
  const router = useRouter();

  // local state for newly added comments (still ephemeral in this example)
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    // fallback in case post not found
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Nav />
        <p className="text-xl text-red-500">Post not found.</p>
        <Footer />
      </div>
    );
  }

  // CHANGED: handle adding a comment (just local for now)
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      author: "Guest",
      text: newComment.trim(),
    };

    // In a real app, you'd call an API route to persist the comment
    // For now, we just update local state
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#eef1f6" }}>
      <Nav />

      <div className="max-w-4xl mx-auto w-full p-4 flex-1">
        <h1 className="text-4xl font-semibold mb-2 mt-6 text-gray-800">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          By {post.author} on {post.date}
        </p>
        <p className="text-lg text-gray-800 mb-8">{post.content}</p>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b py-2">
                <p className="text-sm">
                  <span className="font-bold">{comment.author}:</span>{" "}
                  {comment.text}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first!</p>
          )}
          <div className="mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="border border-gray-300 p-2 rounded w-full"
            />
            <button
              onClick={handleAddComment}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              style={{ backgroundColor: "#4458adc5" }}
            >
              Post Comment
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          {prevPost ? (
            <button
              onClick={() => router.push(`/blog/${prevPost.id}`)}
              className="text-blue-500 hover:underline"
            >
              &larr; {prevPost.title}
            </button>
          ) : (
            <div />
          )}
          {nextPost ? (
            <button
              onClick={() => router.push(`/blog/${nextPost.id}`)}
              className="text-blue-500 hover:underline"
            >
              {nextPost.title} &rarr;
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
 */
