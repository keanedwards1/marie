// CHANGED: New file for storing blog data
export interface Comment {
    id: number;
    author: string;
    text: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    comments: Comment[];
    excerpt: string; // CHANGED: For “preview text” on the index page
  }
  
  // CHANGED: You can store or fetch real data in the future
  export const initialPosts: BlogPost[] = [
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
  