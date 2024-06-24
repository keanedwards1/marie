// src/pages/characters.tsx
import Nav from '../components/Nav';
import CharacterCard from '../components/CharacterCard';

const characters = [
  // Sample data
  { name: 'Character 1', bio: 'Bio of character 1' },
  { name: 'Character 2', bio: 'Bio of character 2' },
  // Add more characters here
];

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}
