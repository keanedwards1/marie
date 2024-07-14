import React from "react";

const RightImage: React.FC = () => {
  const getRandomAngles = (numRays: number) => {
    const angles = [];
    for (let i = 0; i < numRays; i++) {
      // Generate a random angle between 100 and 280 degrees
      let angle = 100 + Math.random() * 180;
      angles.push(angle);
    }
    return angles;
  };

  const angles = getRandomAngles(14);

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

export default RightImage;