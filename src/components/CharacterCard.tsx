// src/components/CharacterCard.tsx
interface Character {
  name: string;
  bio: string;
}

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold">{character.name}</h2>
      <p className="mt-2">{character.bio}</p>
    </div>
  );
}
