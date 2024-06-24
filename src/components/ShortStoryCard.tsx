// src/components/ShortStoryCard.tsx
interface ShortStory {
    title: string;
    description: string;
  }
  
  interface ShortStoryCardProps {
    story: ShortStory;
  }
  
  export default function ShortStoryCard({ story }: ShortStoryCardProps) {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">{story.title}</h2>
        <p className="mt-2">{story.description}</p>
        <a href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Download
        </a>
      </div>
    );
  }
  