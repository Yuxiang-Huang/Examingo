import React, { useState, useEffect } from "react";

interface MultipleChoiceButtonProps {
  optionText: string;
  isCorrect: boolean;
  isRevealed: boolean;
  setIsRevealed: (newIsRevealed: boolean) => void;
}

const MultipleChoiceButton: React.FC<MultipleChoiceButtonProps> = ({
  optionText,
  isCorrect,
  isRevealed,
  setIsRevealed,
}) => {
  const [border, setBorder] = useState<string>("");
  const [radioButtonStyling, setRadioButtonStyling] = useState<string>("");

  const revealChangeBorder = () => {
    if (isRevealed) return;
    if (!isCorrect) {
      setBorder("border-2 border-incorrect-red");
    }
    setIsRevealed(true);
  };

  const mouseOverHandler = () => {
    if (isRevealed) return;
    setBorder("border-2 border-primary-purple");
    setRadioButtonStyling(
      "bg-gradient-to-r from-primary-purple to-primary-red"
    );
  };

  const mouseOutHandler = () => {
    if (isRevealed) return;
    setBorder("");
    setRadioButtonStyling("");
  };

  useEffect(() => {
    if (isCorrect && isRevealed) {
      setBorder("border-2 border-correct-green");
    }
  }, [isRevealed]);

  return (
    <div
      className={
        border +
        " " +
        "w-full h-12 relative flex flex-col justify-center rounded-xl my-2"
      }
      onClick={revealChangeBorder}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div
        className={
          radioButtonStyling +
          " " +
          "bg-white absolute  w-4 h-4 top-1/2 left-2 -translate-y-1/2 rounded-full"
        }
      ></div>
      <div className="ml-8">{optionText}</div>
    </div>
  );
};

export default MultipleChoiceButton;
