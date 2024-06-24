import Nav from '../components/Nav';
import ShortStoryCard from '../components/ShortStoryCard';

const shortStories = [
  // Sample data
  { title: 'Short Story 1', description: 'Description of short story 1' },
  { title: 'Short Story 2', description: 'Description of short story 2' },
  // Add more short stories here
];

export default function ShortStoriesPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Short Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {shortStories.map((story, index) => (
            <ShortStoryCard key={index} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
