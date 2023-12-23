import CheckAnswerButton from "./CheckAnswerButton";
import LogoText from "./LogoText";
import Question from "./Question";
import SaveQuestionButton from "./SaveQuestionButton";
import TextBox from "./TextBox";

const FreeResponse = () => {
  return (
    <div>
      <LogoText />
      <Question questionText="What is Democracy?" />
      <TextBox text="I don't know." />
      <CheckAnswerButton buttonText="Check" />
      <SaveQuestionButton />
    </div>
  );
};

export default FreeResponse;
