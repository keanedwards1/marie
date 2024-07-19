import Nav from '../components/Nav';
import ShortStoryCard from '../components/ShortStoryCard';
import Footer from '../components/RespFooter';
import ComicButton from "@/components/ComicButton";
import router, { useRouter } from "next/router";

const shortStories = [
  // Sample data
  { title: 'Short Story 1', description: 'Description of short story 1' },
  { title: 'Short Story 2', description: 'Description of short story 2' },
 { title: 'Short Story 3', description: 'Description of short story 3' },
  { title: 'Short Story 4', description: 'Description of short story 4' },
   { title: 'Short Story 5', description: 'Description of short story 5' },
  { title: 'Short Story 6', description: 'Description of short story 6' },
  { title: 'Short Story 7', description: 'Description of short story 7' },
  { title: 'Short Story 8', description: 'Description of short story 8' },
  { title: 'Short Story 9', description: 'Description of short story 9' },
  { title: 'Short Story 10', description: 'Description of short story 10' },
  // Add more short stories here
];

export default function ShortStoriesPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-slate-800 font-serif font-bold">Short Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
          {shortStories.map((story, index) => (
            <ShortStoryCard key={index} story={story} />
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
              label="🕊️ View Resources & Reviews → "
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
