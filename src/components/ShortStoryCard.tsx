// src/components/ShortStoryCard.tsx

import { useState } from 'react';
import ComicButton from "./ComicButton";

interface ShortStory {
  id: number;
  title: string;
  description: string;
  pdfFilename: string;
}

interface ShortStoryCardProps {
  story: ShortStory;
}

export default function ShortStoryCard({ story }: ShortStoryCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!story.pdfFilename) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch(`/api/proxy-download?filename=${encodeURIComponent(story.pdfFilename)}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = story.pdfFilename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Download failed');
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      // You might want to show an error message to the user here
    }
    setIsDownloading(false);
  };

  return (
    <div className="card bg-base-100 shadow-md short-story-card">
      <div className="card-body font-serif mt-16 mb-16 text-black">
        <h2 className="card-title">{story.title}</h2>
        <p>{story.description}</p>
        <div className="w-full">
          <button
            className={`comic-button ${story.pdfFilename ? 'comic-button-short-stories' : 'comic-button-coming-soon'}`}
            onClick={handleDownload}
            disabled={isDownloading || !story.pdfFilename}
          >
            {story.pdfFilename 
              ? (isDownloading ? 'Downloading...' : 'Download') 
              : 'Coming Soon'}
          </button>
        </div>
      </div>
    </div>
  );
}