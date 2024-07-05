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
    <div className="card bg-stone-50 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <p>{character.bio}</p>
      </div>
    </div>
  );
}
