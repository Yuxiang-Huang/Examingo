import { useState } from "react";
import CheckAnswerButton from "../components/CheckAnswerButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";
import TextBox from "../components/TextBox";

const FreeResponse = () => {
  const [checked, setChecked] = useState(false);

  const setCheckedTrue = () => {
    setChecked(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-background-purple space-y-5">
      <LogoText />
      <Question questionText="What is Democracy?" />
      <TextBox text="" editable={!checked} />
      {checked && <TextBox text="I don't know." editable={false} />}
      <CheckAnswerButton buttonText="Check" setDisplayTrue={setCheckedTrue} />
      <SaveQuestionButton />
    </div>
  );
};

export default FreeResponse;
