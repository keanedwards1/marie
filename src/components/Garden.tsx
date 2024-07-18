import React, { useEffect, useState } from "react";
import Image from "next/image";
import seedrandom from "seedrandom";

interface FlowerProps {
  src: string;
  offsetX: number;
  offsetY: number;
  zIndex: number;
  width: number | "auto";
  height: number | "auto";
}


const Flower: React.FC<FlowerProps> = ({ src, offsetX, offsetY, zIndex, width, height }) => {
  const style: React.CSSProperties = {
    left: `${offsetX}px`,
    bottom: `${offsetY}px`, // Align based on bottom
    zIndex: zIndex,
  };

  return (
    <div 
      className="flower-container absolute transition-all duration-300 ease-in-out"
      style={style}
    >
      <Image 
        src={src} 
        alt="Flower" 
        width={width === "auto" ? undefined : width} 
        height={height === "auto" ? undefined : height}
        style={{ width: width === "auto" ? "auto" : undefined, height: height === "auto" ? "auto" : undefined }}
      />
    </div>
  );
};

const Garden: React.FC = () => {
  const [flowers, setFlowers] = useState<FlowerProps[]>([]);

  useEffect(() => {
    const rng = seedrandom('fixed-seed');
    const flowerCount = 30;
    const flowerWidth = 90;
    const spreadFactor = 1.2; // Adjust this value to increase the spread
    const baseOffsetY = 0; // Base height for flowers aligned by bottom

    const getRandomFlowerSrc = () => {
      const flowerIndex = Math.floor(rng() * 4); // Randomly select a flower between 0 and 3
      return `/images/flower-${flowerIndex}.png`;
    };

    const getRandomOverlapFactor = () => {
      return 0.5 + rng() * 0.025; // Random value between 0.5 and 0.515
    };

    const getRandomVerticalOffset = () => {
      return baseOffsetY + (rng() * 50); // Randomly move up by up to 50px
    };

    const newFlowers = [...Array(flowerCount)].map((_, index) => ({
      src: getRandomFlowerSrc(),
      offsetX: index * flowerWidth * getRandomOverlapFactor() * spreadFactor,
      offsetY: getRandomVerticalOffset(),
      zIndex: index,
      width: 90, // Fixed width
      height: 100, // Fixed height
    }));

    setFlowers(newFlowers);
  }, []);

  return (
    <section className="mt-24 w-full h-60 md:mt-20 z-0 overflow-hidden">
      {flowers.map((flower, index) => (
        <Flower 
          key={index} 
          src={flower.src}
          offsetX={flower.offsetX}
          offsetY={flower.offsetY} 
          zIndex={flower.zIndex}
          width={flower.width}
          height={flower.height}
        />
      ))}
    </section>
  );
};

export default Garden;
