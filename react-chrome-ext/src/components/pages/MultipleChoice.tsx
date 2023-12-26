import React, { useState } from "react";
import MultipleChoiceButton from "../MultipleChoiceButton";
import SaveQuestionButton from "../SaveQuestionButton";
import LogoText from "../LogoText";
import Question from "../Question";

const MultipleChoice = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  return (
    <div>
      <LogoText />
      <Question questionText="What is the capital of France?" />
      <MultipleChoiceButton
        optionText="Choice 1 oifejaiofjwefj aewjafi jweioj fwjef jewoij  foeijwafoijewfjwej fjw jeiowjfa"
        isCorrect={false}
        isRevealed={isRevealed}
        setIsRevealed={setIsRevealed}
      />
      <MultipleChoiceButton
        optionText="Paris"
        isCorrect={true}
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
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default MultipleChoice;
