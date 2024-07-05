import React from 'react';

interface ComicButtonProps {
  label: string;
  onClick: () => void;
}

const ComicButton: React.FC<ComicButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="comic-button ml-3"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ComicButton;
