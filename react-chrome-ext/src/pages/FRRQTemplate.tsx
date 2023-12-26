import { useState } from "react";
import CheckAnswerButton from "../components/CheckAnswerButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";
import TextBox from "../components/TextBox";

interface TextBoxProps {
  questionText: string;
  checkAnswerButtonText: string;
}

const FRRQTemplate: React.FC<TextBoxProps> = ({
  questionText,
  checkAnswerButtonText,
}) => {
  const [display, setDisplay] = useState(false);

  const setCheckedTrue = () => {
    setDisplay(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-background-purple space-y-5">
      <LogoText />
      <Question questionText={questionText} />
      <TextBox text="" editable={!display} />
      {display && <TextBox text="I don't know." editable={false} />}
      <CheckAnswerButton
        buttonText={checkAnswerButtonText}
        setDisplayTrue={setCheckedTrue}
      />
      <SaveQuestionButton />
    </div>
  );
};

export default FRRQTemplate;
