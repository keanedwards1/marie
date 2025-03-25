// /src/components/LeftImage.tsx
// should be RightImage.tsx

import Image from "next/image";
import React from "react";

interface LeftImageProps {
  className?: string;
}

const LeftImage: React.FC<LeftImageProps> = ({ className }) => {
  return (
    <div
      className={`right-image-styles w-full lg:w-7/12 flex justify-center items-center lg:pt-8 lg:pl-2 lg:pr-6 pr-8 pl-8 pb-4 pt-4 relative order-1 lg:order-2 ${className}`}
    >
      <div className="w-full max-w-[100%] lg:max-w-[99%] pb-[99.67%] relative bg-indigo-50 max-h-[98%] lg:mt-0 book-style">
        {/* Halo */}
        <div
          className="absolute inset-0 z-0 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124, 58, 237, 0.5), rgba(56, 189, 248, 0.4), transparent)",
          }}
        />

        {/* Image */}
        <Image
          className="z-10"
          src="/mockup-2.webp"
          alt="Book"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
};

export default LeftImage;
