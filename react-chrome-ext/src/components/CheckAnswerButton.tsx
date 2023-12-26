import React from "react";

interface CheckAnswerButtonProps {
  buttonText: string;
  checkAnswerFunction: () => void;
}

const CheckAnswerButton: React.FC<CheckAnswerButtonProps> = ({
  buttonText,
  checkAnswerFunction,
}) => {
  return (
    <button
      onClick={checkAnswerFunction}
      className="w-full relative my-3 bg-secondary-red shadow-glow-red border-primary-red border rounded-xl"
    >
      <span className="em:text-lg font-bold bg-gradient-to-br from-primary-red to-primary-purple text-transparent bg-clip-text">
        {buttonText}
      </span>
    </button>
  );
};

export default CheckAnswerButton;
