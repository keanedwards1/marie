// /src/components/LeftImage.tsx
// should be RightImage.tsx

import Image from 'next/image';

const LeftImage: React.FC = () => {
  return (
    <div className="right-image-styles w-full lg:w-7/12 flex justify-center items-center lg:p-8 p-0 pb-8 pt-8 relative order-1 lg:order-2">
      <div className="w-full max-w-[100%] lg:max-w-[90%] pb-[96.67%] relative bg-indigo-50 max-h-[90%] lg:mt-0 book-style">
        <Image
          className="z-10"
          src="/mockup.webp"
          alt="Book"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
};

export default LeftImage;
