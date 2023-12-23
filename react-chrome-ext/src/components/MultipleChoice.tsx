import React, { useState } from "react";
import MultipleChoiceButton from "./MultipleChoiceButton";

const MultipleChoice = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  return <div>
    <h1>Multiple Choice</h1>
    <div className="my-2">
      <MultipleChoiceButton optionText="Choice 1" isCorrect={true} isRevealed={isRevealed} setIsRevealed={setIsRevealed}/>
      <MultipleChoiceButton optionText="Choice 2" isCorrect={false} isRevealed={isRevealed} setIsRevealed={setIsRevealed}/>
      <MultipleChoiceButton optionText="Choice 3" isCorrect={false} isRevealed={isRevealed} setIsRevealed={setIsRevealed}/>
      <MultipleChoiceButton optionText="Choice 4" isCorrect={false} isRevealed={isRevealed} setIsRevealed={setIsRevealed}/>
    </div>
  </div>;
};

export default MultipleChoice;
