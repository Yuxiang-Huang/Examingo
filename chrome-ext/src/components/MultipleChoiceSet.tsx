import React, { useEffect, useState } from "react";
import MultipleChoiceButton from "./MultipleChoiceButton";
import SaveQuestionButton from "./SaveQuestionButton";
import Question from "./Question";
import PreviousNextSet from "./PreviousNextSet";

export interface ChoiceAttributes {
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceSetProps {
  isRevealed: boolean;
  setIsRevealed: (newInitialRevealed: boolean) => void;
  isSelected: number;
  setIsSelected: (newInitialSelected: number) => void;
  question: string;
  choices: ChoiceAttributes[];
  previousFunction: () => void;
  nextFunction: () => void;
  questionSetIndex: number;
  questionSetSize: number;
}

const MultipleChoiceSet: React.FC<MultipleChoiceSetProps> = ({
  isRevealed,
  setIsRevealed,
  isSelected,
  setIsSelected,
  question,
  choices,
  previousFunction,
  nextFunction,
  questionSetIndex,
  questionSetSize,
}) => {

  const renderMultipleChoiceButtons = (choices: ChoiceAttributes[]) => {
    return choices.map((choice, index) => {
      return (
        <MultipleChoiceButton
          optionText={choice.text}
          isCorrect={choice.isCorrect}
          isRevealed={isRevealed}
          reveal={() => setIsRevealed(true)}
          isSelected={isSelected === index}
          select={() => setIsSelected(index)}
          questionSetIndex={questionSetIndex}
        />
      );
    });
  };

  return (
    <>
      <Question questionText={question} />
      {renderMultipleChoiceButtons(choices)}
      <SaveQuestionButton saveFunction={() => false} />
      <PreviousNextSet previousFunction={previousFunction} nextFunction={nextFunction} grayedPrevious={questionSetIndex===0} grayedNext={questionSetSize === questionSetIndex + 1}/>
    </>
  );
};

export default MultipleChoiceSet;
