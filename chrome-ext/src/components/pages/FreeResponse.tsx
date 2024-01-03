import React, { useState, useEffect } from "react";
import LogoText from "../LogoText";
import SelectText from "../SelectText";
import Loading from "../Loading";
import { ChoiceAttributes } from "../MultipleChoiceSet";
import FreeResponseSet from "../FreeResponseSet";
import { MultipleChoiceSetProperties } from "./MultipleChoice";

const FreeResponse = () => {
  const [generated, setGenerated] = useState<boolean>(false);
  const [questionSets, setQuestionSets] = useState<MultipleChoiceSetProperties[]>([]);
  const [questionSetIndex, setQuestionSetIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    if (questionSets.length > 0) {
      questionSets[questionSetIndex].choices.forEach((element) => {
        if (element.isCorrect) {
          setAnswer(element.text);
        }
      });
    }
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
        <FreeResponseSet question={questionSets[questionSetIndex].question} answer={answer} />
      )}
    </div>
  );
};

export default FreeResponse;
