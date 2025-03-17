// src/components/ShortStoryCard.tsx

import { useState } from 'react';
import ComicButton from "./ComicButton";
import Link from 'next/link';
import styles from './ShortStoryCard.module.css';

interface Story {
  id: number;
  title: string;
  warning?: string;
  description: string;
  pdfFilename: string;
  fullStory?: string; 
}


interface ShortStoryCardProps {
  story: Story;
}

const SERVER_URL = 'https://159.89.233.75.nip.io';

export default function ShortStoryCard({ story }: ShortStoryCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
    setIsDownloading(false);
  };

  const cardContent = (
    <div className={`${styles.shortStoryCard} h-full ${!story.fullStory && styles.inactiveCard}`}>
      <div className="flex flex-col font-serif p-20 mt-10 text-black w-full h-full justify-between">
        <div>
          <h2 className={`text-xl font-bold text-center mb-2}`}>
            {story.title}
          </h2>
          {story.warning && (
            <p className="text-center text-gray-800 text-sm font-extralight mt-2 mb-2">{story.warning}</p>
          )}
          <p className="mt-2 text-gray-700 font-normal">{story.description}</p>
        </div>
        <div className="w-full mt-4" onClick={(e) => e.stopPropagation()}>
          <button
            className={`comic-button ${story.pdfFilename ? 'comic-button-short-stories' : 'comic-button-coming-soon'} w-full`}
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

  return story.fullStory ? (
    <Link href={`/short-stories/${story.id}`} className={styles.cardLink}>
      {cardContent}
    </Link>
  ) : (
    <div className={styles.cardLink}>
      {cardContent}
    </div>
  );
}