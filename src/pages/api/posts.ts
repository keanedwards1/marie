// CHANGED: New API route for handling post retrieval & creation
import type { NextApiRequest, NextApiResponse } from "next";

// CHANGED: Temporary in-memory store (replace with real DB queries)
let posts = [
  {
    id: 1,
    title: "Welcome to Our Blog!",
    content: "This is the first blog post. Stay tuned for more updates!",
    author: "Admin",
    date: "March 10, 2025",
    excerpt: "A short snippet about our very first post...",
    comments: [
      { id: 101, author: "User1", text: "Looking forward to more posts!" },
    ],
  },
  {
    id: 2,
    title: "Behind the Scenes of the Book Launch",
    content: "We’re so excited to share this journey with you all.",
    author: "Author Name",
    date: "March 11, 2025",
    excerpt: "Ever wonder how a major book launch comes together?",
    comments: [],
  },
  {
    id: 3,
    title: "Why We Write",
    content:
      "Writing is not just about telling stories, it’s about connecting with readers.",
    author: "Staff Writer",
    date: "March 12, 2025",
    excerpt: "A peek into the motivation behind our writing team...",
    comments: [],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // CHANGED: handle GET and POST
  if (req.method === "GET") {
    return res.status(200).json(posts);
  } else if (req.method === "POST") {
    const { title, content, author, excerpt } = req.body;
    const newId = Date.now(); // naive ID generation
    const newPost = {
      id: newId,
      title,
      content,
      author,
      date: new Date().toLocaleDateString(),
      excerpt: excerpt || "",
      comments: [],
    };
    posts.push(newPost);
    return res.status(201).json(newPost);
  }

  // CHANGED: method not allowed if not GET or POST
  return res.status(405).json({ message: "Method not allowed" });
}
