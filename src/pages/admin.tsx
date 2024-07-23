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
        <h2 className="text-2xl mb-4 mt-8">{title}</h2>
        <h2 className="text-2xl mb-4 mt-8">Action: <span className="text-sm">(will move the review to the respective category you pick)</span></h2>
      </div>
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-4 flex flex-row justify-between rounded shadow-md mb-4">
          <div>
            <p><strong>Name:</strong> {review.first_name} {review.last_name}</p>
            <p><strong>Job Title:</strong> {review.job_title}</p>
            <p><strong>Review:</strong> {review.review}</p>
          </div>
          <div className="ml-10 flex flex-row items-center">
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
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
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
    <div className="min-h-screen bg-purple-50 p-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl mb-4">Admin Dashboard</h1>
        <div className="w-1/3 md:w-1/6 lg:w-1/12">
          <button onClick={handleLogout} className="comic-button comic-button-admin mb-4">
            Logout
          </button>
        </div>
      </div>

      <div className="bg-purple-200 p-8 rounded mb-10">
        <ReviewSection title="New/Pending Reviews 🌱🪻🌺" reviews={pendingReviews} actions={["approve", "reject"]} />
      </div>
      <div className="bg-purple-200 p-8 rounded mb-10">
        <ReviewSection title="Approved Reviews 🌿🌼🙌 — shows up on your reviews page" reviews={approvedReviews} actions={["pending", "reject"]} />
      </div>
      <div className="bg-purple-200 p-8 rounded">
        <ReviewSection title="Rejected Reviews 😲🙅👎 — will get automatically get deleted every night at 12pm :)" reviews={rejectedReviews} actions={["pending", "approve"]} />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AdminPage;