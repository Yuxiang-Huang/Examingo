import React, { useState } from "react";
import MultipleChoiceButton from "../MultipleChoiceButton";
import SaveQuestionButton from "../SaveQuestionButton";
import LogoText from "../LogoText";
import Question from "../Question";

const SelectText = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  return (
    <div>
      <LogoText />
      <Question questionText="Select Passage to Generate Questions From" />
    </div>
  );
};

export default SelectText;