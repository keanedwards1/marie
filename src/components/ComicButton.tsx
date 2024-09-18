import React from 'react';

interface ComicButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const ComicButton: React.FC<ComicButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`comic-button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ComicButton;
