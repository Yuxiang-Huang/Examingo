import React, { useState } from "react";
import MultipleChoiceButton from "../MultipleChoiceButton";
import SaveQuestionButton from "../SaveQuestionButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SelectText from "./SelectText";
import MultipleChoiceSet from "../MultipleChoiceSet";
import Loading from "../Loading";

const MultipleChoice = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [selectedText, setIsSelectedText] = useState<string>("e");
  const [question, setQuestion] = useState<string>("");
  const [choices, setChoices] = useState<string[]>([]);

  return (
    <div>
      <LogoText />
      {selectedText == "" && <SelectText />}
      {selectedText != "" && <Loading/>}
      {selectedText != "" && question != "" && <MultipleChoiceSet isRevealed={isRevealed} setIsRevealed={setIsRevealed} question={question} choices={choices} />}
    </div>
  );
};

export default MultipleChoice;
