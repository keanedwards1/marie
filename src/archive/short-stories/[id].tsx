/* import { useRouter } from 'next/router';
import Nav from '../../components/Nav';
import Footer from '../../components/RespFooter';
import ComicButton from "@/components/ComicButton";

// You'll need to import your story data or fetch it from an API

export default function ShortStoryPage() {
  const router = useRouter();
  const { id } = router.query;

  const story = shortStories.find(s => s.id === Number(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-50">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-slate-800 font-serif font-bold">{story.title}</h1>
        {story.warning && (
          <p className="mt-2 text-rose-800 text-sm font-extralight">{story.warning}</p>
        )}
        <div className="mt-4 text-lg font-serif text-slate-700">
           This is where you'd render the full story content 
          <p>{story.description}</p>
          Add the full story content here 
        </div>
        <div className="mt-8">
          <ComicButton
            label="← Back to Short Stories"
            onClick={() => router.push("/short-stories")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
} */