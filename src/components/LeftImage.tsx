import React, { useEffect, useState } from "react";
import seedrandom from "seedrandom";
import Image from 'next/image';

const LeftImage: React.FC = () => {
  const [angles, setAngles] = useState<number[]>([]);
  const [isWide, setIsWide] = useState<boolean | null>(null);

  const calculateAngles = (wide: boolean) => {
    const dynamicSeed = `${Date.now()}-${Math.random()}`;
    const rng = seedrandom(dynamicSeed);

    const getRandomAngles = (numRays: number) => {
      const angles = [];
      for (let i = 0; i < numRays; i++) {
        let angle;
        if (!wide) {
          angle = 90 + rng() * 180;
        } else {
          angle = 50 + rng() * 260;
        }
        angles.push(angle);
      }
      return angles;
    };

    setAngles(getRandomAngles(14));
  };

  useEffect(() => {
    const checkWidth = () => {
      const wide = window.innerWidth >= 768;
      if (isWide === null || isWide !== wide) {
        setIsWide(wide);
        calculateAngles(wide);
      }
    };

    // Initial check
    checkWidth();

    // Add event listener
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
  }, [isWide]);

  // Don't render anything until we have determined if it's wide or not
  if (isWide === null) {
    return null;
  }

  return (
    <div className="right-image-styles w-full md:w-7/12 flex justify-center items-center p-8 md:p-0 relative">
      <div className="w-full max-w-[90%] h-0 pb-[106.67%] relative">
        <Image
          src="/book.png"
          alt="Book"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
        {angles.map((angle, index) => (
          <div
            key={index}
            className="ray"
            style={{ transform: `rotate(${angle}deg)` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LeftImage;