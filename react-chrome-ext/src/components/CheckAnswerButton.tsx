import React from "react";

interface CheckAnswerButtonProps {
  buttonText: string;
}

const CheckAnswerButton: React.FC<CheckAnswerButtonProps> = ({
  buttonText,
}) => {
  return (
    <div>
      <button>{buttonText}</button>
    </div>
  );
};

export default CheckAnswerButton;
