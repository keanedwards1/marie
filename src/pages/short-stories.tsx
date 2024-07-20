// src/pages/short-stories.tsx

import Nav from '../components/Nav';
import ShortStoryCard from '../components/ShortStoryCard';
import Footer from '../components/RespFooter';
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";

const shortStories = [
  { 
    id: 1, 
    title: 'Dr. Seuss: The Bitter Butter Battle', 
    description: 'A satirical tale about the arms race and mutually assured destruction.',
    pdfFilename: 'dr-suess-the-bitter-butter-battle.pdf'
  },
  { 
    id: 2, 
    title: 'What If the Titanic Hadn\'t Sunk', 
    description: 'An alternate history exploring the potential outcomes if the Titanic had completed its maiden voyage.',
    pdfFilename: 'what-if-the-titanic-hadnt-sunk.pdf'
  },
  { 
    id: 3, 
    title: 'POV: You\'re A...', 
    description: 'A unique perspective-shifting story that puts you in someone else\'s shoes.',
    pdfFilename: 'pov-youre-a.pdf'
  },
  // Add more placeholder stories to reach a total of 10
  { id: 4, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
  { id: 5, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
  { id: 6, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
  { id: 7, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
  { id: 8, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
  { id: 9, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
  { id: 10, title: 'Coming Soon', description: 'An exciting new story is on its way!', pdfFilename: '' },
];

export default function ShortStoriesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-purple-50">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-slate-800 font-serif font-bold">Short Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
          {shortStories.map((story) => (
            <ShortStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="← See Luminoles 🧚‍♂️"
            onClick={() => router.push("/luminoles")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="🕊️ View Offerings → "
            onClick={() => router.push("/offerings")}
          />
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}