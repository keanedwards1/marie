import Image from 'next/image';

const LeftImage: React.FC = () => {
  return (
    <div className="right-image-styles w-full md:w-7/12 flex justify-center items-center p-8 md:p-0 relative">
      <div className="w-full max-w-[90%] pb-[106.67%] relative bg-indigo-50 mt-32 md:mt-0 rounded-xl">
        <Image
          className="z-10"
          src="/mockup.png"
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
