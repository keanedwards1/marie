// src/pages/characters.tsx
import Nav from '../components/Nav';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/RespFooter';

const characters = [
  // Sample data
  { name: 'Character 1', bio: 'Bio of character 1' },
  { name: 'Character 2', bio: 'Bio of character 2' },
  // Add 30 more characters here
  { name: 'Character 3', bio: 'Bio of character 3' },
  { name: 'Character 4', bio: 'Bio of character 4' },
  { name: 'Character 5', bio: 'Bio of character 5' },
  { name: 'Character 6', bio: 'Bio of character 6' },
  { name: 'Character 7', bio: 'Bio of character 7' },
  { name: 'Character 8', bio: 'Bio of character 8' },
  { name: 'Character 9', bio: 'Bio of character 9' },
  { name: 'Character 10', bio: 'Bio of character 10' },
  { name: 'Character 11', bio: 'Bio of character 11' },
  { name: 'Character 12', bio: 'Bio of character 12' },
  { name: 'Character 13', bio: 'Bio of character 13' },
  { name: 'Character 14', bio: 'Bio of character 14' },
  { name: 'Character 15', bio: 'Bio of character 15' },
  { name: 'Character 16', bio: 'Bio of character 16' },
  { name: 'Character 17', bio: 'Bio of character 17' },
  { name: 'Character 18', bio: 'Bio of character 18' },
  { name: 'Character 19', bio: 'Bio of character 19' },
  { name: 'Character 20', bio: 'Bio of character 20' },
  { name: 'Character 21', bio: 'Bio of character 21' },
  { name: 'Character 22', bio: 'Bio of character 22' },
  { name: 'Character 23', bio: 'Bio of character 23' },
  { name: 'Character 24', bio: 'Bio of character 24' },
  { name: 'Character 25', bio: 'Bio of character 25' },
  { name: 'Character 26', bio: 'Bio of character 26' },
  { name: 'Character 27', bio: 'Bio of character 27' },
  { name: 'Character 28', bio: 'Bio of character 28' },
  { name: 'Character 29', bio: 'Bio of character 29' },
  { name: 'Character 30', bio: 'Bio of character 30' },
];

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
      <div className="mt-8">
          <Footer />
      </div>
    </div>
  );
}
