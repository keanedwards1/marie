import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [pendingReviews, setPendingReviews] = useState<Review[]>([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      setToken(storedToken);
      fetchPendingReviews(storedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://159.89.233.75.nip.io/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      setToken(data.token);
      localStorage.setItem('adminToken', data.token);
      fetchPendingReviews(data.token);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const fetchPendingReviews = async (authToken: string) => {
    try {
      const response = await fetch('https://159.89.233.75.nip.io/api/admin/pending-reviews', {
        headers: { 'Authorization': `Bearer ${authToken}` },
      });
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const reviews = await response.json();
      setPendingReviews(reviews);
    } catch (error) {
      setError('Failed to fetch pending reviews.');
    }
  };

  const handleReviewAction = async (reviewId: number, action: 'approve' | 'reject') => {
    try {
      const response = await fetch('https://159.89.233.75.nip.io/api/admin/review-action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ reviewId, action }),
      });
      if (!response.ok) throw new Error(`Failed to ${action} review`);
      fetchPendingReviews(token);
    } catch (error) {
      setError(`Failed to ${action} review.`);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('adminToken');
    router.push('/');
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-3xl mb-4">Admin Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-4">Logout</button>
      <h2 className="text-2xl mb-4">Pending Reviews</h2>
      {pendingReviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded shadow-md mb-4">
          <p><strong>Name:</strong> {review.first_name} {review.last_name}</p>
          <p><strong>Job Title:</strong> {review.job_title}</p>
          <p><strong>Review:</strong> {review.review}</p>
          <div className="mt-2">
            <button
              onClick={() => handleReviewAction(review.id, 'approve')}
              className="bg-green-500 text-white p-2 rounded mr-2"
            >
              Approve
            </button>
            <button
              onClick={() => handleReviewAction(review.id, 'reject')}
              className="bg-red-500 text-white p-2 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AdminPage;