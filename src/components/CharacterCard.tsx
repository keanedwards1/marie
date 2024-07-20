// src/components/CharacterCard.tsx
import Image from 'next/image';
import { useState } from 'react';

interface Character {
  name: string;
  bio: string;
  bio2?: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-4 bg-white rounded-xl shadow-inner overflow-hidden">
        <div className="relative w-full h-full">
          <Image 
            src={character.image} 
            alt={`${character.name} image`} 
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-white mb-3">{character.name}</h2>
        <p className="text-base text-gray-100 mb-4 line-clamp-3 font-medium">
          {character.bio}
          {character.bio2 && (
            <>
              <br />
              {character.bio2}
            </>
          )}
        </p>
      </div>
    </div>
  );
}