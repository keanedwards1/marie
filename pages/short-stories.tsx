import Nav from '../src/components/Nav';
import ShortStoryCard from '../src/components/ShortStoryCard';
import Footer from '../src/components/RespFooter';

const shortStories = [
  // Sample data
  { title: 'Short Story 1', description: 'Description of short story 1' },
  { title: 'Short Story 2', description: 'Description of short story 2' },
  { title: 'Short Story 3', description: 'Description of short story 3' },
  { title: 'Short Story 4', description: 'Description of short story 4' },
  { title: 'Short Story 5', description: 'Description of short story 5' },
  { title: 'Short Story 6', description: 'Description of short story 6' },
  { title: 'Short Story 7', description: 'Description of short story 7' },
  { title: 'Short Story 8', description: 'Description of short story 8' },
  { title: 'Short Story 9', description: 'Description of short story 9' },
  // Add more short stories here
];

export default function ShortStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Short Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {shortStories.map((story, index) => (
            <ShortStoryCard key={index} story={story} />
          ))}
        </div>
      </div>
      <div className="mt-8">
          <Footer />
      </div>
    </div>
  );
}
