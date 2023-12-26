import React from "react";

interface CheckAnswerButtonProps {
  buttonText: string;
  setDisplayTrue: () => void;
}

const CheckAnswerButton: React.FC<CheckAnswerButtonProps> = ({
  buttonText,
  setDisplayTrue,
}) => {
  return (
    <div>
      <button
        className="border-2 rounded-lg bg-#450000"
        onClick={setDisplayTrue}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CheckAnswerButton;
