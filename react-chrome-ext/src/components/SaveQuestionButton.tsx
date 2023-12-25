import React from "react";

interface SaveButtonProps {
  saveFunction: () => void;
}

const SaveQuestionButton: React.FC<SaveButtonProps>  = ({ saveFunction }) => {
  return (
    <button onClick={saveFunction} className="w-full relative my-3 bg-secondary-purple shadow-glow-red border-primary-purple border rounded-xl">
      <span className="em:text-lg font-medium bg-gradient-to-br from-primary-purple to-primary-red text-transparent bg-clip-text">
        Save Question
      </span>
    </button>
  );
};

export default SaveQuestionButton;
