import { useState } from "react";
import CheckAnswerButton from "../components/CheckAnswerButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";
import TextBox from "../components/TextBox";

const ResolveQuesiton = () => {
  const [answered, setAnswered] = useState(false);

  const setAnsweredTrue = () => {
    setAnswered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-background-purple space-y-5">
      <LogoText />
      <Question questionText="Type Your Question" />
      <TextBox text="" editable={!answered} />
      {answered && <TextBox text="I don't know." editable={false} />}
      <CheckAnswerButton buttonText="Answer" setDisplayTrue={setAnsweredTrue} />
      <SaveQuestionButton />
    </div>
  );
};

export default ResolveQuesiton;
