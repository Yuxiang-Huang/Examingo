import React, { useState } from "react";
import MultipleChoiceButton from "../components/MultipleChoiceButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";

const MultipleChoice = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center bg-background-purple space-y-5">
      <LogoText />
      <Question questionText="Question:" />
      <div className="my-2">
        <MultipleChoiceButton
          optionText="Choice 1"
          isCorrect={true}
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
        />
        <MultipleChoiceButton
          optionText="Choice 2"
          isCorrect={false}
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
        />
        <MultipleChoiceButton
          optionText="Choice 3"
          isCorrect={false}
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
        />
        <MultipleChoiceButton
          optionText="Choice 4"
          isCorrect={false}
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
        />
      </div>
      <SaveQuestionButton />
    </div>
  );
};

export default MultipleChoice;
