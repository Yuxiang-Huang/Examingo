import React, { useState } from "react";
import LogoText from "../LogoText";
import SelectText from "../SelectText";
import Loading from "../Loading";
import MultipleChoiceSet, { ChoiceAttributes } from "../MultipleChoiceSet";

const MultipleChoice = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [generated, setGenerated] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [choices, setChoices] = useState<ChoiceAttributes[]>([]);

  return (
    <div>
      <LogoText />
      {!generated && (
        <SelectText
          setGenerated={setGenerated}
          setQuestion={setQuestion}
          setChoices={setChoices}
        />
      )}
      {generated && question == "" && <Loading />}
      {generated && question != "" && (
        <MultipleChoiceSet
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
          question={question}
          choices={choices}
        />
      )}
    </div>
  );
};

export default MultipleChoice;
