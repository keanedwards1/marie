import React from "react";
import Image from "next/image";

interface FlowerProps {
  src: string;
  offsetX: number;
  offsetY: number;
  zIndex: number;
  width: number;
  height: number;
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
      <Image src={src} alt="Flower" width={width} height={height} />
    </div>
  );
};

const Garden: React.FC = () => {
  const flowerCount = 30;
  const flowerWidth = 90;
  const spreadFactor = 1.2; // Adjust this value to increase the spread
  const baseOffsetY = 0; // Base height for flowers aligned by bottom

  const getRandomFlowerSrc = () => {
    const flowerIndex = Math.floor(Math.random() * 4); // Randomly select a flower between 0 and 3
    return `/images/flower-${flowerIndex}.png`;
  };

  const getRandomOverlapFactor = () => {
    return 0.5 + Math.random() * 0.025; // Random value between 0.5 and 0.515
  };

  const getRandomVerticalOffset = () => {
    return baseOffsetY + (Math.random() * 50); // Randomly move up by up to 20px
  };

  return (
    <section className="relative w-full h-60 md:mt-20 z-0 overflow-hidden">
      {[...Array(flowerCount)].map((_, index) => {
        const overlapFactor = getRandomOverlapFactor();
        return (
          <Flower 
            key={index} 
            src={getRandomFlowerSrc()}
            offsetX={index * flowerWidth * overlapFactor * spreadFactor}
            offsetY={getRandomVerticalOffset()} // Random bottom offset for flowers
            zIndex={index}
            width={90}
            height={100}
          />
        );
      })}
    </section>
  );
};

export default Garden;
