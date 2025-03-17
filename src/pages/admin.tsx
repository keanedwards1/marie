import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// CHANGED: Import React Quill for WYSIWYG
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

// BlogPost & BlogComment interfaces
interface BlogComment {
  id: number;
  post_id: number;
  author: string;
  text: string;
  likes: number;
  created_at: number;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  created_at: number;
  updated_at: number;
  comments?: BlogComment[];
}

// Review interface (unchanged)
interface Review {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  review: string;
  status: string;
  created_at: number;
}

// Extend tab types for admin dashboard
type AdminTab = "reviews" | "blogs" | "pdfs";

const AdminPage: React.FC = () => {
  const router = useRouter();

  // Auth & Reviews
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});

  // CHANGED: Tab switching (added "pdfs")
  const [activeTab, setActiveTab] = useState<AdminTab>("reviews");

  // CHANGED: Blog data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // States for adding a new blog post
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogAuthor, setNewBlogAuthor] = useState("");
  const [newBlogDate, setNewBlogDate] = useState("");
  const [newBlogContent, setNewBlogContent] = useState<string>("");

  // States for editing an existing blog post
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editContent, setEditContent] = useState<string>("");

  const editRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editingPostId && editRef.current) {
      editRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [editingPostId]);

  // React Quill config (optional)
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  // CHANGED: For styled alerts
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | "info">(
    "info"
  );

  useEffect(() => {
    // Fetch blog posts even if we’re not logged in
    fetchBlogPosts();

    // Override the browser's alert with a styled version
    (window as any).alert = (msg: string) => {
      const lower = msg.toLowerCase();
      if (lower.includes("error")) {
        setAlertType("error");
      } else if (lower.includes("created") || lower.includes("updated")) {
        setAlertType("success");
      } else {
        setAlertType("info");
      }
      setAlertMessage(msg);

      setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
    };
  }, []);

  // CHANGED: fetch blog posts (public GET)
  async function fetchBlogPosts() {
    try {
      const response = await fetch("https://159.89.233.75.nip.io/api/blog/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      const data: BlogPost[] = await response.json();
      setBlogPosts(data);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      setError("Failed to fetch blog posts.");
    }
  }

  // CHANGED: Fetch PDFs from backend for admin PDF management
  async function fetchPdfs(authToken: string) {
    try {
      const res = await fetch("https://159.89.233.75.nip.io/api/admin/list-pdfs", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (!res.ok) throw new Error("Failed to fetch PDFs");
      const data = await res.json();
      setUploadedPdfs(data);
    } catch (err) {
      console.error("Error fetching PDFs:", err);
    }
  }

  // Login & Logout
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://159.89.233.75.nip.io/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }
      const data = await response.json();
      setToken(data.token);
      fetchAllReviews(data.token);
      fetchPdfs(data.token); // Fetch PDFs after login
    } catch (err: unknown) {
      console.error("Login error:", err);
      if (err instanceof Error) setError(err.message);
      else if (typeof err === "string") setError(err);
      else setError("An unknown error occurred");
    }
  };

  const handleLogout = () => {
    setToken("");
    router.push("/");
  };

  // Reviews Logic
  const fetchAllReviews = async (authToken: string) => {
    try {
      const response = await fetch("https://159.89.233.75.nip.io/api/admin/all-reviews", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (!response.ok) throw new Error("Failed to fetch reviews");
      const allReviews = await response.json();
      setReviews(allReviews);
    } catch (error) {
      setError("Failed to fetch reviews.");
    }
  };

  const handleReviewAction = async (
    reviewId: number,
    action: "approve" | "reject" | "pending"
  ) => {
    setLoading((prev) => ({ ...prev, [reviewId]: true }));
    try {
      const response = await fetch("https://159.89.233.75.nip.io/api/admin/review-action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reviewId, action }),
      });
      if (!response.ok) throw new Error(`Failed to ${action} review`);
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === reviewId ? { ...review, status: action } : review
        )
      );
    } catch (err) {
      console.error(`Failed to ${action} review:`, err);
      setError(`Failed to ${action} review.`);
    } finally {
      setLoading((prev) => ({ ...prev, [reviewId]: false }));
    }
  };

  // Separate components for each review status
  const pendingReviews = reviews.filter((review) => review.status === "pending");
  const approvedReviews = reviews.filter(
    (review) => review.status === "approved" || review.status === "approve"
  );
  const rejectedReviews = reviews.filter(
    (review) => review.status === "rejected" || review.status === "reject"
  );

  const ReviewSection: React.FC<{
    title: string;
    reviews: Review[];
    actions: string[];
  }> = ({ title, reviews, actions }) => (
    <>
      <div className="flex flex-row justify-between">
        <h2 className="sm:text-2xl text-xs mb-4 mt-8">{title}</h2>
        <h2 className="sm:text-2xl text-right text-xs ml-10 mb-4 mt-8">
          Action:{" "}
          <span className="text-xs sm:text-sm">
            (will move the review to the respective category you pick)
          </span>
        </h2>
      </div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white text-[#354057] p-4 flex flex-row justify-between rounded shadow-md mb-4"
        >
          <div>
            <p>
              <strong>Name:</strong> {review.first_name} {review.last_name}
            </p>
            <p>
              <strong>Job Title:</strong> {review.job_title}
            </p>
            <p>
              <strong>Review:</strong> {review.review}
            </p>
          </div>
          <div className="ml-5 flex flex-col justify-center sm:flex-row gap-5 sm:gap-0 items-center">
            {actions.map((action) => (
              <div key={action} className="ml-2">
                <button
                  onClick={() =>
                    handleReviewAction(review.id, action as "approve" | "reject" | "pending")
                  }
                  disabled={loading[review.id]}
                  className={`
                    ${
                      action === "approve"
                        ? "bg-cyan-100 hover:bg-cyan-200"
                        : action === "reject"
                        ? "bg-orange-100 hover:bg-orange-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                    text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 p-2 rounded
                    ${loading[review.id] ? "opacity-50" : ""}
                  `}
                >
                  {loading[review.id] ? "Processing..." : action.charAt(0).toUpperCase() + action.slice(1)}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );

  // CHANGED: PDF Management states
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [uploadedPdfs, setUploadedPdfs] = useState<string[]>([]);

  // CHANGED: PDF Upload handler
  async function handlePdfUpload() {
    if (!pdfFile) {
      alert("No file selected!");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("pdfFile", pdfFile);

      const res = await fetch("https://159.89.233.75.nip.io/api/admin/upload-pdf", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to upload PDF");
      }
      const data = await res.json();
      alert(`PDF uploaded: ${data.filename}`);
      setPdfFile(null);
      fetchPdfs(token);
    } catch (err) {
      console.error("Error uploading PDF:", err);
      alert("Error uploading PDF.");
    }
  }

  // CHANGED: PDF deletion handler (requires a server route for deletion)
  async function handleDeletePdf(filename: string) {
    if (!window.confirm(`Are you sure you want to delete ${filename}?`)) return;
    try {
      const res = await fetch(`https://159.89.233.75.nip.io/api/admin/delete-pdf/${encodeURIComponent(filename)}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to delete PDF");
      }
      alert(`PDF deleted: ${filename}`);
      fetchPdfs(token);
    } catch (err) {
      console.error("Error deleting PDF:", err);
      alert("Error deleting PDF.");
    }
  }

  // Admin Blog Logic remains the same for adding/editing/deleting posts/comments
  const handleAddBlogPost = async () => {
    if (!newBlogTitle.trim() || !newBlogAuthor.trim() || !newBlogContent.trim()) {
      alert("Please fill out Title, Author, and Content.");
      return;
    }
    try {
      const response = await fetch("https://159.89.233.75.nip.io/api/blog/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newBlogTitle.trim(),
          author: newBlogAuthor.trim(),
          date: newBlogDate.trim(),
          content: newBlogContent,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }
      const data = await response.json();
      fetchBlogPosts();
      setNewBlogTitle("");
      setNewBlogAuthor("");
      setNewBlogDate("");
      setNewBlogContent("");
      alert("Blog post created!");
    } catch (err) {
      console.error("Error creating blog post:", err);
      alert("Error creating blog post.");
    }
  };

  const handleRemoveBlogPost = async (postId: number) => {
    if (!window.confirm("Are you sure you want to remove this blog post?")) return;
    try {
      const response = await fetch(`https://159.89.233.75.nip.io/api/blog/posts/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }
      fetchBlogPosts();
    } catch (err) {
      console.error("Error deleting blog post:", err);
      alert("Error deleting blog post.");
    }
  };

  const handleAddBlogComment = async (postId: number, text: string) => {
    if (!text.trim()) return;
    try {
      const response = await fetch(`https://159.89.233.75.nip.io/api/blog/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: "Admin",
          text: text.trim(),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      fetchBlogPosts();
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("Error adding comment.");
    }
  };

  const handleRemoveBlogComment = async (commentId: number) => {
    if (!window.confirm("Remove this comment?")) return;
    try {
      const response = await fetch(`https://159.89.233.75.nip.io/api/blog/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error("Failed to remove comment");
      }
      fetchBlogPosts();
    } catch (err) {
      console.error("Error removing comment:", err);
      alert("Error removing comment.");
    }
  };

  const handleBeginEdit = async (post: BlogPost) => {
    setEditingPostId(post.id);
    setEditTitle(post.title);
    setEditAuthor(post.author);
    setEditDate(post.date);
    setEditContent(post.content);
    setActiveTab("blogs");
  };

  const handleSaveEdit = async () => {
    if (!editingPostId) return;
    if (!editTitle.trim() || !editAuthor.trim() || !editContent.trim()) {
      alert("Please fill out Title, Author, and Content.");
      return;
    }
    try {
      const response = await fetch(`https://159.89.233.75.nip.io/api/blog/posts/${editingPostId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: editTitle.trim(),
          author: editAuthor.trim(),
          date: editDate.trim(),
          content: editContent,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update blog post");
      }
      fetchBlogPosts();
      setEditingPostId(null);
      setEditTitle("");
      setEditAuthor("");
      setEditDate("");
      setEditContent("");
      alert("Blog post updated!");
    } catch (err) {
      console.error("Error updating blog post:", err);
      alert("Error updating blog post.");
    }
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setEditTitle("");
    setEditAuthor("");
    setEditDate("");
    setEditContent("");
  };

  const BlogPostItem: React.FC<{ post: BlogPost }> = ({ post }) => {
    const [commentText, setCommentText] = useState("");
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<BlogComment[] | null>(post.comments || null);

    async function fetchCommentsForPost() {
      try {
        const res = await fetch(`https://159.89.233.75.nip.io/api/blog/posts/${post.id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post comments");
        }
        const data = await res.json();
        setComments(data.comments || []);
      } catch (error) {
        console.error("Error fetching comments for post:", error);
        alert("Error fetching comments");
      }
    }

    const handleToggleComments = () => {
      if (!showComments && !comments) {
        fetchCommentsForPost();
      }
      setShowComments(!showComments);
    };

    return (
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl text-[#354057] font-medium">
            {post.title} (Likes: {post.likes})
          </h3>
          <div className="flex flex-row gap-3">
            <button
              onClick={() => handleBeginEdit(post)}
              className="bg-[#617beb] hover:bg-[#4760d2] text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveBlogPost(post.id)}
              className="bg-[#ec8e47] hover:bg-[#f04040] text-white shadow transition px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          By {post.author} on {post.date}
        </p>
        <div className="mt-2 text-[#354057]" dangerouslySetInnerHTML={{ __html: post.content }} />
        <button
          onClick={handleToggleComments}
          className="mt-3 bg-[#617beb] hover:bg-[#4760d2] text-white px-3 py-1 rounded"
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {showComments && comments && (
          <div className="mt-4 bg-gray-100 p-3 rounded">
            <h4 className="font-bold text-[#354057] mb-2">Comments:</h4>
            {comments.length > 0 ? (
              comments.map((c) => (
                <div key={c.id} className="flex flex-row justify-between text-[#354057] bg-white p-2 mb-2 rounded">
                  <span>
                    <strong>{c.author}:</strong> {c.text} (Likes: {c.likes})
                  </span>
                  <button
                    onClick={() => handleRemoveBlogComment(c.id)}
                    className="bg-[#ec8e47] hover:bg-[#f04040] text-white px-3 py-1 text-sm transition rounded"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
            <div className="mt-2 flex">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add new comment..."
                className="flex-1 border text-[#354057] border-gray-300 rounded p-1 mr-2"
              />
              <button
                onClick={() => {
                  handleAddBlogComment(post.id, commentText);
                  setCommentText("");
                  setTimeout(() => fetchCommentsForPost(), 500);
                }}
                className="bg-[#617beb] hover:bg-[#4760d2] transition text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render Page
  if (!token) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 m-6 rounded shadow-md">
          <h2 className="text-2xl mb-4 text-[#6f7ec0]">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-gray-700 focus:border-gray-900 focus:border-1 focus:ring-gray-800 focus:outline-none transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-gray-700 focus:border-gray-900 focus:border-1 focus:ring-gray-800 focus:outline-none transition-colors"
          />
          <button type="submit" className="w-full comic-button comic-button-admin p-2 rounded">
            Login
          </button>
          {error && <p className="text-[#f75050] font-serif mt-4 -mb-3">*{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 pr-6 pl-6 pt-8 pb-8 sm:pr-8 sm:pl-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl text-[#3f3f3f] mb-4">Admin Dashboard</h1>
        <div className="w-1/3 md:w-1/6 lg:w-1/12">
          <button onClick={handleLogout} className="comic-button comic-button-admin mb-4">
            Logout
          </button>
        </div>
      </div>

      {alertMessage && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded shadow-md transition-all duration-300 ${
            alertType === "error"
              ? "bg-[#f06b6b] text-white"
              : alertType === "success"
              ? "bg-[#6f7ec0e0] text-white"
              : "bg-blue-100 text-[#354057]"
          }`}
        >
          {alertMessage}
        </div>
      )}

      <div className="flex flex-row gap-4 mb-4">
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 rounded transition ${
            activeTab === "reviews"
              ? "bg-[#6f7ec0] text-white"
              : "bg-[#dde2fa] hover:bg-[#bdc8f7] text-[#354057]"
          }`}
        >
          Review Management
        </button>
        <button
          onClick={() => setActiveTab("blogs")}
          className={`px-4 py-2 rounded transition ${
            activeTab === "blogs"
              ? "bg-[#6f7ec0] text-white"
              : "bg-[#dde2fa] hover:bg-[#bdc8f7] text-[#354057]"
          }`}
        >
          Blog Management
        </button>
        <button
          onClick={() => setActiveTab("pdfs")}
          className={`px-4 py-2 rounded transition ${
            activeTab === "pdfs"
              ? "bg-[#6f7ec0] text-white"
              : "bg-[#dde2fa] hover:bg-[#bdc8f7] text-[#354057]"
          }`}
        >
          PDF Management
        </button>
      </div>

      {activeTab === "reviews" && (
        <>
          <div className="bg-[#6f7ec0] text-white p-8 rounded mb-10 mt-4">
            <ReviewSection
              title="New/Pending Reviews 🌱"
              reviews={pendingReviews}
              actions={["approve", "reject"]}
            />
          </div>
          <div className="bg-[#6f7ec0] text-white p-8 rounded mb-10">
            <ReviewSection
              title="Approved Reviews 🌿 — shows up on your reviews page"
              reviews={approvedReviews}
              actions={["pending", "reject"]}
            />
          </div>
          <div className="bg-[#6f7ec0] text-white p-8 rounded">
            <ReviewSection
              title="Rejected Reviews 🍂 — will get automatically deleted every night at 12pm :)"
              reviews={rejectedReviews}
              actions={["pending", "approve"]}
            />
          </div>
        </>
      )}

      {activeTab === "blogs" && (
        <div className="bg-[#6f7ec0] p-8 rounded">
          <h2 className="text-2xl mb-6 text-white">Manage Blog Posts</h2>

          <div className="bg-white p-4 rounded shadow-md mb-6">
            <h3 className="text-[#354057] mb-2 text-lg font-medium">Create a Blog</h3>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="text"
                placeholder="Title"
                value={newBlogTitle}
                onChange={(e) => setNewBlogTitle(e.target.value)}
                className="border border-gray-300 text-[#354057] rounded p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Author"
                value={newBlogAuthor}
                onChange={(e) => setNewBlogAuthor(e.target.value)}
                className="border border-gray-300 text-[#354057] rounded p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Date (optional)"
                value={newBlogDate}
                onChange={(e) => setNewBlogDate(e.target.value)}
                className="border border-gray-300 text-[#354057] rounded p-2 flex-1"
              />
            </div>

            <ReactQuill
              theme="snow"
              value={newBlogContent}
              onChange={setNewBlogContent}
              className="mb-2 text-black"
              modules={quillModules}
              formats={quillFormats}
              placeholder="Write your blog content here..."
            />

            <button
              onClick={handleAddBlogPost}
              className="bg-[#617beb] hover:bg-[#4760d2] transition text-white px-4 py-2 rounded"
            >
              Add Blog Post
            </button>
          </div>

          {editingPostId && (
            <div ref={editRef} className="bg-white p-4 rounded shadow-md mb-6">
              <h3 className="text-[#354057] mb-2 text-lg font-medium">Edit Blog Post</h3>
              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border border-gray-300 text-[#354057] rounded p-2 flex-1"
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                  className="border border-gray-300 text-[#354057] rounded p-2 flex-1"
                />
                <input
                  type="text"
                  placeholder="Date (optional)"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="border border-gray-300 text-[#354057] rounded p-2 flex-1"
                />
              </div>

              <ReactQuill
                theme="snow"
                value={editContent}
                onChange={setEditContent}
                className="mb-2 text-[#354057]"
                modules={quillModules}
                formats={quillFormats}
              />

              <div className="flex gap-3">
                <button
                  onClick={handleSaveEdit}
                  className="bg-[#55c859d9] hover:bg-[#47d29a] transition text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-300 hover:bg-gray-400 transition text-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div>
            <h3 className="mb-2 text-white text-2xl">Existing Posts</h3>
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => <BlogPostItem key={post.id} post={post} />)
            ) : (
              <p className="text-white">No blog posts yet. Add one above!</p>
            )}
          </div>
        </div>
      )}

      {activeTab === "pdfs" && (
        <div className="bg-[#6f7ec0] p-8 rounded">
          <h2 className="text-2xl mb-6 text-white">PDF Management</h2>

          <div className="bg-white p-4 rounded shadow-md mb-6">
            <h3 className="text-[#354057] mb-2 text-lg font-medium">Upload a PDF</h3>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setPdfFile(e.target.files[0]);
                }
              }}
            />
            <button
              onClick={handlePdfUpload}
              className="ml-3 bg-[#617beb] hover:bg-[#4760d2] transition text-white px-4 py-2 rounded"
            >
              Upload
            </button>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-[#354057] mb-2 text-lg font-medium">Existing PDFs</h3>
            {uploadedPdfs.length > 0 ? (
              <ul>
                {uploadedPdfs.map((filename) => (
                  <li key={filename} className="flex justify-between items-center mb-2">
                    <span className="text-[#354057]">{filename}</span>
                    <button
                      onClick={() => handleDeletePdf(filename)}
                      className="bg-[#ec8e47] hover:bg-[#f04040] text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No PDFs found.</p>
            )}
          </div>
        </div>
      )}

      {error && <p className="text-[#ff0000] mt-2">{error}</p>}
    </div>
  );
};

export default AdminPage;



/*   import React, { useState, useEffect } from "react";
  import { useRouter } from "next/router";

  interface Review {
    id: number;
    first_name: string;
    last_name: string;
    job_title: string;
    review: string;
    status: string;
    created_at: number;
  }

  const AdminPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [reviews, setReviews] = useState<Review[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
    const router = useRouter();

    useEffect(() => {
      const storedToken = localStorage.getItem("adminToken");
      if (storedToken) {
        setToken(storedToken);
        fetchAllReviews(storedToken);
      }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "https://159.89.233.75.nip.io/api/admin/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Login failed");
        }
        const data = await response.json();
        setToken(data.token);
        localStorage.setItem("adminToken", data.token);
        fetchAllReviews(data.token);
      } catch (error: unknown) {
        console.error("Login error:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else if (typeof error === "string") {
          setError(error);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    const fetchAllReviews = async (authToken: string) => {
      try {
        const response = await fetch(
          "https://159.89.233.75.nip.io/api/admin/all-reviews",
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const allReviews = await response.json();
        setReviews(allReviews);
      } catch (error) {
        setError("Failed to fetch reviews.");
      }
    };

    const handleReviewAction = async (
      reviewId: number,
      action: "approve" | "reject" | "pending"
    ) => {
      setLoading((prev) => ({ ...prev, [reviewId]: true }));
      try {
        const response = await fetch(
          "https://159.89.233.75.nip.io/api/admin/review-action",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ reviewId, action }),
          }
        );
        if (!response.ok) throw new Error(`Failed to ${action} review`);
        // Update the review status locally
        setReviews(prevReviews =>
          prevReviews.map(review =>
            review.id === reviewId ? { ...review, status: action } : review
          )
        );
      } catch (error) {
        console.error(`Failed to ${action} review:`, error);
        setError(`Failed to ${action} review.`);
      } finally {
        setLoading((prev) => ({ ...prev, [reviewId]: false }));
      }
    };

    const handleLogout = () => {
      setToken("");
      localStorage.removeItem("adminToken");
      router.push("/");
    };

    const ReviewSection: React.FC<{ title: string, reviews: Review[], actions: string[] }> = ({ title, reviews, actions }) => (
      <>
        <div className="flex flex-row justify-between">
          <h2 className="sm:text-2xl text-xs mb-4 mt-8">{title}</h2>
          <h2 className="sm:text-2xl text-right text-xs ml-10 mb-4 mt-8">Action: <span className="text-xs sm:text-sm">(will move the review to the respective category you pick)</span></h2>
        </div>
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 flex flex-row justify-between rounded shadow-md mb-4">
            <div>
              <p><strong>Name:</strong> {review.first_name} {review.last_name}</p>
              <p><strong>Job Title:</strong> {review.job_title}</p>
              <p><strong>Review:</strong> {review.review}</p>
            </div>
            <div className="ml-5 flex flex-col justify-center sm:flex-row gap-5 sm:gap-0 items-center">
              {actions.map(action => (
                <div key={action} className="ml-2">
                  <button
                    onClick={() => handleReviewAction(review.id, action as "approve" | "reject" | "pending")}
                    disabled={loading[review.id]}
                    className={`
                      ${action === 'approve' ? 'bg-cyan-100 hover:bg-cyan-200' : 
                        action === 'reject' ? 'bg-orange-100 hover:bg-orange-200' : 
                        'bg-gray-100 hover:bg-gray-200'}
                      text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 p-2 rounded
                      ${loading[review.id] ? "opacity-50" : ""}
                    `}
                  >
                    {loading[review.id] ? "Processing..." : action.charAt(0).toUpperCase() + action.slice(1)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );

    if (!token) {
      return (
        <div className="min-h-screen bg-purple-50 flex items-center justify-center">
          <form onSubmit={handleLogin} className="bg-white p-8 m-6 rounded shadow-md">
            <h2 className="text-2xl mb-4 text-purple-900">Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-gray-700 focus:border-gray-900 focus:border-1 focus:ring-gray-800 focus:outline-none transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-gray-700 focus:border-gray-900 focus:border-1 focus:ring-gray-800 focus:outline-none transition-colors"
            />
            <button type="submit" className="w-full comic-button comic-button-admin p-2 rounded">
              Login
            </button>
            {error && <p className="text-red-800 font-serif mt-4 -mb-3">*{error}</p>}
          </form>
        </div>
      );
    }

    const pendingReviews = reviews.filter(review => review.status === 'pending');
    const approvedReviews = reviews.filter(review => review.status === 'approved' || review.status === 'approve');
    const rejectedReviews = reviews.filter(review => review.status === 'rejected' || review.status === 'reject');

    return (
      <div className="min-h-screen bg-purple-50 pr-6 pl-6 pt-8 pb-8 sm:pr-8 sm:pl-8">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl mb-4">Admin Dashboard</h1>
          <div className="w-1/3 md:w-1/6 lg:w-1/12">
            <button onClick={handleLogout} className="comic-button comic-button-admin mb-4">
              Logout
            </button>
          </div>
        </div>

        <div className="bg-[#6f7ec0] p-8 rounded mb-10 mt-4">
          <ReviewSection title="New/Pending Reviews 🌱🪻🌺" reviews={pendingReviews} actions={["approve", "reject"]} />
        </div>
        <div className="bg-[#6f7ec0] p-8 rounded mb-10">
          <ReviewSection title="Approved Reviews 🌿🌼🙌 — shows up on your reviews page" reviews={approvedReviews} actions={["pending", "reject"]} />
        </div>
        <div className="bg-[#6f7ec0] p-8 rounded">
          <ReviewSection title="Rejected Reviews 😲🙅👎 — will get automatically get deleted every night at 12pm :)" reviews={rejectedReviews} actions={["pending", "approve"]} />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  };

  export default AdminPage; */
