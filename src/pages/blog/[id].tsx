// src/pages/blog/[id].tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";

interface Comment {
  id: number;
  author: string;
  text: string;
  likes: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: Comment[];
}

// Temporary mock posts (replace with API call later)
const mockPosts: Post[] = [
  {
    id: 1,
    title: "Welcome to The Realm of Unity",
    content: `Ever wonder what a magical world would look like? Welcome to The Realm of Unity—a place where imagination, adventure, and wonder converge...

This world is not bound by the constraints of time, nor by the limitations of reality. Here, the sky shifts with the emotions of the land, and the rivers hum with the echoes of ancient songs.

Our journey begins at the heart of Unity, where scholars study forgotten lore, travelers seek lost relics, and the winds carry secrets only the most attentive ears can hear. Whether you’re here to uncover the mysteries of the world or simply bask in its beauty, you are now a part of the story.

Stay with us as we delve deeper into the characters, lands, and legends that make The Realm of Unity unlike anything you've ever seen.`,
    author: "V. M. Elyse",
    date: "March 10, 2025",
    comments: [
      { id: 101, author: "User1", text: "Looking forward to more posts!", likes: 2 },
      { id: 102, author: "MagicSeeker", text: "This world sounds incredible!", likes: 5 },
    ],
  },
  {
    id: 2,
    title: "Whose Hat Was It Anyway?",
    content: `A hat is just a hat—until it isn't.

In the quiet town of Elmwick, a peculiar hat was found resting on the cobblestone street. It was no ordinary hat. Striped in red and white, slightly tilted as if it had been caught mid-flight, it bore the scent of adventure and mischief.

The townsfolk debated. Some believed it belonged to a wandering magician; others swore it was left behind by a mischievous cat who had once turned their entire world upside down.

But the real question remains—where is the owner? And more importantly, what secrets does this hat hold?

As we unravel this mystery, let’s explore the importance of stories that make us wonder, laugh, and dream.`,
    author: "The Cat In The Hat",
    date: "March 11, 2025",
    comments: [
      { id: 103, author: "BookLover42", text: "I love this book!", likes: 4 },
      { id: 104, author: "CuriousReader", text: "This reminds me of something...", likes: 1 },
    ],
  },
  {
    id: 3,
    title: "How to Make a Perfect Loaf of Bread",
    content: `Baking bread is both an art and a science—one that has been passed down through generations. A well-made loaf is more than just food; it’s a symbol of warmth, comfort, and the joy of homemade craftsmanship.

### 🥖 Ingredients for a Perfect Loaf:
- 3 ½ cups (450g) bread flour
- 1 ½ cups (360ml) warm water
- 2 ¼ teaspoons (1 packet) active dry yeast
- 1 ½ teaspoons salt
- 1 teaspoon sugar
- 1 tablespoon olive oil

### 🏡 Step-by-Step Guide:
1. **Activate the Yeast**: In a small bowl, dissolve the sugar in warm water, then sprinkle in the yeast. Let it sit for 5–10 minutes until foamy.
2. **Mix the Dough**: In a large bowl, combine flour and salt. Add the yeast mixture and olive oil, stirring until a sticky dough forms.
3. **Knead with Love**: Transfer the dough to a lightly floured surface. Knead for about 10 minutes until smooth and elastic.
4. **First Rise**: Place the dough in a greased bowl, cover it with a clean towel, and let it rise in a warm spot for 1–2 hours until doubled in size.
5. **Shape & Second Rise**: Gently shape the dough into a loaf and place it in a floured or greased baking pan. Let it rise for another 30–45 minutes.
6. **Bake to Perfection**: Preheat the oven to 425°F (220°C). Bake for 25–30 minutes until golden brown and hollow-sounding when tapped.
7. **Cool & Enjoy**: Let the loaf cool on a wire rack before slicing. Serve with butter, jam, or just enjoy the simple pleasure of homemade bread.

Making bread is a deeply rewarding process. It teaches patience, precision, and the value of simple, quality ingredients. Whether you're a seasoned baker or a first-time enthusiast, this recipe will guide you toward creating the perfect loaf every time.

Happy baking! 🍞,`,
    author: "Aspen",
    date: "March 12, 2025",
    comments: [],
  },
];


export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;

  // Find the post from mock data
  const post = mockPosts.find((p) => p.id === Number(id));

  // State for comments and likes
  const [comments, setComments] = useState<Comment[]>(post ? post.comments : []);
  const [newComment, setNewComment] = useState<string>("");
  const [postLikes, setPostLikes] = useState<number>(0);
  const [commentLikes, setCommentLikes] = useState<Record<number, number>>({});

  // Load likes from localStorage when page loads
  useEffect(() => {
    if (post) {
      const savedPostLikes = localStorage.getItem(`postLikes-${post.id}`);
      if (savedPostLikes) setPostLikes(parseInt(savedPostLikes, 10));

      const savedCommentLikes = localStorage.getItem(`commentLikes-${post.id}`);
      if (savedCommentLikes) setCommentLikes(JSON.parse(savedCommentLikes));
    }
  }, [post]);

  // Save post likes to localStorage
  useEffect(() => {
    if (post) {
      localStorage.setItem(`postLikes-${post.id}`, postLikes.toString());
    }
  }, [postLikes, post]);

  // Save comment likes to localStorage
  useEffect(() => {
    if (post) {
      localStorage.setItem(`commentLikes-${post.id}`, JSON.stringify(commentLikes));
    }
  }, [commentLikes, post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Nav />
        <p className="text-xl text-red-500">Post not found.</p>
        <Footer />
      </div>
    );
  }

  const handleLikePost = () => {
    setPostLikes((prev) => prev + 1);
  };

  const handleLikeComment = (commentId: number) => {
    setCommentLikes((prevLikes) => ({
      ...prevLikes,
      [commentId]: (prevLikes[commentId] || 0) + 1,
    }));
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      author: "Guest",
      text: newComment.trim(),
      likes: 0,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

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

        <div className="text-lg text-gray-800 space-y-4">
          {post.content.split("\n").map((paragraph, index) =>
            paragraph.trim() ? <p key={index}>{paragraph}</p> : <br key={index} />
          )}
        </div>

        {/* Post Like Button */}
        <div className="mt-6 flex items-center">
          <button
            onClick={handleLikePost}
            className="bg-[#4458adc5] hover:bg-[#3f4f95c5] text-white px-4 py-2 rounded flex items-center"
          >
            👍 Like Post ({postLikes})
          </button>
        </div>

        {/* Comments Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1b1b1bc5]">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b py-2 flex justify-between items-center">
                <p className="text-sm flex-1 text-[#1b1b1bc5]">
                  <span className="font-bold">{comment.author}:</span> {comment.text}
                </p>
                <button
                  onClick={() => handleLikeComment(comment.id)}
                  className="ml-4 text-[#1b1b1bc5] bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 transition rounded flex items-center"
                >
                  👍 {commentLikes[comment.id] || 0}
                </button>
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
