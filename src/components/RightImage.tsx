import React from 'react';

const RightImage: React.FC = () => {
  return (
    <div className="right-image-styles w-full md:w-7/12 sm:w-full flex justify-center z-0 items-center p-8 md:p-0 sm:p-0">
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