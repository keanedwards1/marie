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
      <div className="card-body font-serif mt-16 mb-16 text-black">
        <h2 className="card-title">{story.title}</h2>
        <p>{story.description}</p>
        <div className="w-full">
          <button
            className="comic-button comic-button-short-stories"
            onClick={() => console.log("Downloaded")}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
