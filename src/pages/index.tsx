// src/pages/index.tsx
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Title Page</h1>
        <p className="mt-4 text-lg">Brief description of the book.</p>
        <a href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Purchase the Book
        </a>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>Email: example@example.com</p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Sign Up for Updates</h2>
          <form>
            <input type="email" placeholder="Your email" className="border p-2 rounded"/>
            <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
