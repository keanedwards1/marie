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
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{story.title}</h2>
        <p>{story.description}</p>
        <a href="#" className="mt-4 btn btn-primary rounded-lg">Download</a> {/* Ensure consistent border radius */}
      </div>
    </div>
  );
}
