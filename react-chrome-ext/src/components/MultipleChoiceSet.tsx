import React, { useState } from "react";
import MultipleChoiceButton from "./MultipleChoiceButton";
import SaveQuestionButton from "./SaveQuestionButton";
import Question from "./Question";

export interface ChoiceAttributes {
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceSetProps {
  isRevealed: boolean;
  setIsRevealed: (isRevealed: boolean) => void;
  question: string;
  choices: ChoiceAttributes[];
}

const MultipleChoiceSet: React.FC<MultipleChoiceSetProps> = ({
  isRevealed,
  setIsRevealed,
  question,
  choices,
}) => {
  const renderMultipleChoiceButtons = (choices: ChoiceAttributes[]) => {
    return choices.map((choice) => {
      return (
        <MultipleChoiceButton
          optionText={choice.text}
          isCorrect={choice.isCorrect}
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
        />
      );
    });
  };

  return (
    <>
      <Question questionText={question} />
      {renderMultipleChoiceButtons(choices)}
      <SaveQuestionButton saveFunction={() => false} />
    </>
  );
};

export default MultipleChoiceSet;
