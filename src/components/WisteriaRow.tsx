import React, { useEffect, useState } from "react";
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
      <Image src="/images/wisteria.png" alt="Wisteria" width={100} height={120} />
    </div>
  );
};

const WisteriaRow: React.FC = () => {
  const wisteriaCount = 30;
  const wisteriaWidth = 100;
  const spreadFactor = 1.4; // Adjust this value to increase the spread
  const [offsetYValues, setOffsetYValues] = useState<number[]>([]);

  useEffect(() => {
    const randomValues = Array.from({ length: wisteriaCount }, () => Math.random() * 20);
    setOffsetYValues(randomValues);
  }, []);

  const getRandomOverlapFactor = () => {
    return 0.5 + Math.random() * 0.015; // Random value between 0.5 and 0.515
  };

  return (
    <section className="relative w-full h-56 z-0 overflow-hidden">
      {offsetYValues.length > 0 && [...Array(wisteriaCount)].map((_, index) => {
        const overlapFactor = getRandomOverlapFactor();
        const offsetY = offsetYValues[index];
        return (
          <Wisteria 
            key={index} 
            offsetX={index * wisteriaWidth * overlapFactor * spreadFactor} 
            offsetY={offsetY}
            zIndex={index}
            delay={index * 0.5} // Staggered delay
          />
        );
      })}
    </section>
  );
};

export default WisteriaRow;
