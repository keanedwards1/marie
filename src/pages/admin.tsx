// src/pages/admin.tsx

import React, { useState, useEffect } from "react";
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
  const [pendingReviews, setPendingReviews] = useState<Review[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (storedToken) {
      setToken(storedToken);
      fetchPendingReviews(storedToken);
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
      fetchPendingReviews(data.token);
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

  const fetchPendingReviews = async (authToken: string) => {
    try {
      const response = await fetch(
        "https://159.89.233.75.nip.io/api/admin/pending-reviews",
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch reviews");
      const reviews = await response.json();
      setPendingReviews(reviews);
    } catch (error) {
      setError("Failed to fetch pending reviews.");
    }
  };

  const handleReviewAction = async (
    reviewId: number,
    action: "approve" | "reject"
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
      fetchPendingReviews(token);
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

  if (!token) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button type="submit" className="w-full comic-button p-2 rounded">
            Login
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl mb-4">Admin Dashboard</h1>
        <div className="w-1/3 md:w-1/6 lg:w-1/12">
          <button onClick={handleLogout} className="comic-button mb-4">
            Logout
          </button>
        </div>
      </div>
      <h2 className="text-2xl mb-4">Pending Reviews</h2>
      {pendingReviews.map((review) => (
        <div key={review.id} className="bg-white p-4 flex flex-row justify-between rounded shadow-md mb-4">

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

          <div className="ml-10 flex flex-row items-center">
            <div className="w-full">
              <button
                onClick={() => handleReviewAction(review.id, "approve")}
                disabled={loading[review.id]}
                className={`bg-cyan-100 text-gray-500 hover:bg-cyan-200 hover:text-gray-700 transition-all duration-300 hover:scale-105 !p-2 rounded ${
                  loading[review.id] ? "opacity-50" : ""
                }`}
              >
                {loading[review.id] ? "Processing..." : "Approve"}
              </button>
            </div>

            <div className="ml-2 w-full">
              <button
                onClick={() => handleReviewAction(review.id, "reject")}
                disabled={loading[review.id]}
                className={`bg-orange-100 text-gray-600 hover:bg-orange-200 hover:text-gray-800 transition-all duration-300 hover:scale-105 !p-2 rounded ${
                  loading[review.id] ? "opacity-50" : ""
                }`}
              >
                {loading[review.id] ? "Processing..." : "Reject"}
              </button>
            </div>

          </div>
        </div>
      ))}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AdminPage;
