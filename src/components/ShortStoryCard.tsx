// src/components/ShortStoryCard.tsx

import ComicButton from "./ComicButton";
import DownloadButton from "./Download-Button";

interface ShortStory {
  title: string;
  description: string;
}

interface ShortStoryCardProps {
  story: ShortStory;
}

export default function ShortStoryCard({ story }: ShortStoryCardProps) {
  return (
    <div className="card bg-base-100 shadow-md short-story-card">
      <div className="card-body font-serif text-black">
        <h2 className="card-title">{story.title}</h2>
        <p>{story.description}</p>
        <div className="w-full">
            <ComicButton
              label="Download"
              onClick={() => console.log("Downloaded")}
            />
        </div>
      </div>
    </div>
  );
}
