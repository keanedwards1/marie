import React from 'react';

const HomeRightCrystal: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 relative flex justify-center items-center rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-yellow-300 opacity-50"></div>
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'url(/crystal.jpg)', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      ></div>
      <div className="relative w-full pb-[100%]"></div>
      {/* If you want to add any content inside this div, you can do so here */}
    </div>
  );
};

export default HomeRightCrystal;