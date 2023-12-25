import React from "react";

interface CheckAnswerButtonProps {
  buttonText: string;
}

const CheckAnswerButton: React.FC<CheckAnswerButtonProps> = ({
  buttonText,
}) => {
  return (
    <div>
      <button className="border-2 rounded-lg">{buttonText}</button>
    </div>
  );
};

export default CheckAnswerButton;
