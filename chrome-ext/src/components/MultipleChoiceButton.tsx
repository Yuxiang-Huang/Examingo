import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useEffect } from "react";

interface MultipleChoiceButtonProps {
  optionText: string;
  isCorrect: boolean;
  isRevealed: boolean;
  reveal: () => void;
  isSelected: boolean;
  select: () => void;
  questionSetIndex: number;
}

const MultipleChoiceButton: React.FC<MultipleChoiceButtonProps> = ({
  optionText,
  isCorrect,
  isRevealed,
  reveal,
  isSelected,
  select,
  questionSetIndex,
}) => {
  const [border, setBorder] = useState<string>("");
  const [radioButtonStyling, setRadioButtonStyling] = useState<string>("bg-white");
  
  const correctStyle = () => {
    setBorder("border-2 border-correct-green shadow-glow-green");
    setRadioButtonStyling("bg-correct-green");
  }

  const incorrectStyle = () => {
    setBorder("border-2 border-incorrect-red shadow-glow-red");
    setRadioButtonStyling("bg-incorrect-red");
  }

  const noStyle = () => {
    setBorder("");
    setRadioButtonStyling("bg-white");
  }

  const hoverStyle = () => {
    setBorder("border-2 border-primary-purple");
    setRadioButtonStyling( "bg-gradient-to-r from-primary-purple to-primary-red");
  }

  const revealHandler = () => {
    if (isRevealed) return;
    if (isCorrect) correctStyle();
    else incorrectStyle();
    select();
    reveal();
  };

  const mouseOverHandler = () => {
    if (isRevealed) return;
    hoverStyle();
  };

  const mouseOutHandler = () => {
    if (isRevealed) return;
    noStyle();
  };

  useEffect(() => {
    if (isRevealed) {
      if (isCorrect) {
        correctStyle();
      } else if (isSelected) {
        incorrectStyle();
      } else {
        noStyle();
      }
    }
  }, [isRevealed]);

  useEffect(() => {
    if (isRevealed) {
      if (isCorrect) {
        correctStyle();
      } else if (isSelected) {
        incorrectStyle();
      } else {
        noStyle();
      }
    } else {
      noStyle();
    }
  }, [questionSetIndex]);

  return (
    <div
      className={
        border +
        " " +
        "w-full min-h-12 relative flex flex-col justify-center rounded-xl my-4"
      }
      onClick={revealHandler}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div
        className={
          radioButtonStyling +
          " " +
          "absolute  w-4 h-4 top-1/2 left-2 -translate-y-1/2 rounded-full"
        }
      ></div>
      <div className="ml-8">{optionText}</div>
    </div>
  );
};

export default MultipleChoiceButton;
