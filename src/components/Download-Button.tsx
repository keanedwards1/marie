import React from "react";

const DownloadButton: React.FC = () => {
  return (
    <div className="relative inline-block group" data-tooltip="Size: 20Mb">
      <div className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        <div className="mr-2">Download</div>
        <span className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            ></path>
          </svg>
        </span>
      </div>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Size: 20Mb
      </div>
    </div>
  );
};

export default DownloadButton;
