import React, { useEffect, useState } from "react";
import LogoText from "../LogoText";
import SelectText from "../SelectText";
import Loading from "../Loading";
import MultipleChoiceSet, { ChoiceAttributes } from "../MultipleChoiceSet";

export interface MultipleChoiceSetProperties {
  question: string;
  choices: ChoiceAttributes[];
}

const MultipleChoice = () => {
  const [generated, setGenerated] = useState<boolean>(false);
  const [isRevealeds, setIsRevealeds] = useState<boolean[]>([]);
  const [selecteds, setSelecteds] = useState<number[]>([]);
  const [questionSets, setQuestionSets] = useState<MultipleChoiceSetProperties[]>([]);
  const [questionSetIndex, setQuestionSetIndex] = useState<number>(0);

  const previousFunction = () => {
    setQuestionSetIndex(prevQuestionSetIndex => Math.max(0, prevQuestionSetIndex - 1));
  };

  const nextFunction = () => {
    setQuestionSetIndex(prevQuestionSetIndex => Math.min(questionSets.length - 1, prevQuestionSetIndex + 1));
  };

  const setIsRevealed = (newIsRevealed: boolean) => {
    setIsRevealeds(prevIsRevealeds => {
      const newIsRevealeds = [...prevIsRevealeds];
      newIsRevealeds[questionSetIndex] = newIsRevealed;
      return newIsRevealeds;
    });
  };

  const setIsSelected = (newIsSelected: number) => {
    setSelecteds(prevSelecteds => {
      const newSelecteds = [...prevSelecteds];
      newSelecteds[questionSetIndex] = newIsSelected;
      return newSelecteds;
    });
  };

  useEffect(() => {
    setIsRevealeds(questionSets.map(() => false));
    setSelecteds(questionSets.map(() => -1));
  }, [questionSets]);
  
  return (
    <div>
      <LogoText />
      {!generated && (
        <SelectText
          setGenerated={setGenerated}
          setQuestionSets={setQuestionSets}
        />
      )}
      {generated && questionSets.length === 0 && <Loading />}
      {generated && questionSets.length > 0 && (
        <MultipleChoiceSet
          isRevealed={isRevealeds[questionSetIndex]}
          setIsRevealed={setIsRevealed}
          isSelected={selecteds[questionSetIndex]}
          setIsSelected={setIsSelected}
          question={questionSets[questionSetIndex].question}
          choices={questionSets[questionSetIndex].choices}
          previousFunction={previousFunction}
          nextFunction={nextFunction}
          questionSetIndex={questionSetIndex}
          questionSetSize={questionSets.length}
        />
      )}
    </div>
  );
};

export default MultipleChoice;
