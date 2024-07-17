import React, { useEffect, useState } from "react";
import seedrandom from "seedrandom";

const LeftImage: React.FC = () => {
  const [angles, setAngles] = useState<number[]>([]);

  useEffect(() => {
    const rng = seedrandom('fixed-seed');
    const getRandomAngles = (numRays: number) => {
      const angles = [];
      for (let i = 0; i < numRays; i++) {
        let angle = 50 + rng() * 260; // Generate a random angle between 50 and 310 degrees
        angles.push(angle);
      }
      return angles;
    };

    setAngles(getRandomAngles(14));
  }, []);

  return (
    <div className="right-image-styles w-full md:w-7/12 flex justify-center items-center p-8 md:p-0 relative">
      <div
        className="w-full max-w-[90%] h-0 pb-[106.67%] relative" // 90% width, 4:3 aspect ratio
        style={{
          backgroundImage: "url(/book.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
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
