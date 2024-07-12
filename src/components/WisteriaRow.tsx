import React from "react";
import Image from "next/image";

interface WisteriaProps {
  offsetX: number;
  offsetY: number;
  zIndex: number;
  delay: number;
}

const Wisteria: React.FC<WisteriaProps> = ({ offsetX, offsetY, zIndex, delay }) => {
  const style: React.CSSProperties = {
    left: `${offsetX}px`,
    top: `${offsetY}px`,
    zIndex: zIndex,
    animationDelay: `${delay}s`,
  };

  return (
    <div 
      className="wisteria-container absolute transition-all duration-300 ease-in-out"
      style={style}
    >
      <Image src="/images/wisteria.png" alt="Wisteria" width={120} height={140} />
    </div>
  );
};

const WisteriaRow: React.FC = () => {
  const wisteriaCount = 24;
  const wisteriaWidth = 140;

  const getRandomOverlapFactor = () => {
    return 0.5 + Math.random() * 0.02; // Random value between 0.5 and 0.6
  };

  return (
    <section className="relative w-full h-72 z-0 overflow-hidden">
      {[...Array(wisteriaCount)].map((_, index) => {
        const overlapFactor = getRandomOverlapFactor();
        return (
          <Wisteria 
            key={index} 
            offsetX={index * wisteriaWidth * overlapFactor} 
            offsetY={Math.random() * 20}
            zIndex={index}
            delay={index * 1} // Staggered delay
          />
        );
      })}
    </section>
  );
};

export default WisteriaRow;
