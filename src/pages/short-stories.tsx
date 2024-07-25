// /src/pages/short-stories.tsx

import Nav from "../components/Nav";
import ShortStoryCard from "../components/ShortStoryCard";
import Footer from "../components/RespFooter";
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";
import { shortStories } from "../data/shortStories";
import SubscribeForm from "@/components/SubscribeForm";

export default function ShortStoriesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-purple-50">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-slate-800 font-serif font-bold">
          Short Stories
        </h1>
        <p className="mt-4 text-lg font-serif text-slate-700 italic">
          The Luminoles of Unity have graciously offered to share the intimate
          details of their lives for healing, growth, and joy.
        </p>
        <p className="mt-2 text-lg text-slate-700 font-serif">
          PEACE to all beings in all worlds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
          {shortStories.map((story) => (
            <ShortStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
      <div className="mt-20 mb-16 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
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

      <div className="">
        <SubscribeForm />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
