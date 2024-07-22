// src/components/ShortStoryCard.tsx

import { useState } from 'react';
import ComicButton from "./ComicButton";

interface ShortStory {
  id: number;
  title: string;
  warning?: string;
  description: string;
  pdfFilename: string;
}

interface ShortStoryCardProps {
  story: ShortStory;
}

const SERVER_URL = 'https://159.89.233.75.nip.io';

export default function ShortStoryCard({ story }: ShortStoryCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!story.pdfFilename) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch(`${SERVER_URL}/api/download/${encodeURIComponent(story.pdfFilename)}`);
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
    <div className="card bg-base-100 shadow-md flex justify-center align-middle short-story-card">
      <div className="card-body flex font-serif mt-16 lg:w-7/12 md:w-full w-8/12 mb-16 text-black">
        <div className='flex justify-center'>
          <h2 className="card-title text-center">{story.title}</h2>
        </div>
        {story.warning && (
          <p className="text-center text-rose-800 text-sm font-extralight mt-2">{story.warning}</p>
        )}
        <p className="mt-2 text-gray-700 font-normal">{story.description}</p>
        <div className="w-full mt-4">
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