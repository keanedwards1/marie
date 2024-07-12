import React from 'react';

const RightImage: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center p-8">
      <div 
        className="w-full max-w-[90%] h-0 pb-[106.67%]" // 80% width, 4:3 aspect ratio
        style={{ 
          backgroundImage: 'url(/book.png)', 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

export default RightImage;