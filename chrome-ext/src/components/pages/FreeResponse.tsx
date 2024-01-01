import React, { useState } from "react";
import LogoText from "../LogoText";
import SelectText from "../SelectText";
import Loading from "../Loading";
import { ChoiceAttributes } from "../MultipleChoiceSet";
import FreeResponseSet from "../FreeResponseSet";

const FreeResponse = () => {
  const [generated, setGenerated] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [choices, setChoices] = useState<ChoiceAttributes[]>([]);

  let answer = "";

  choices.forEach((element) => {
    if (element.isCorrect) {
      answer = element.text;
    }
  });

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
      {generated && question === "" && <Loading />}
      {generated && question !== "" && (
        <FreeResponseSet question={question} answer={answer} />
      )}
    </div>
  );
};

export default FreeResponse;
