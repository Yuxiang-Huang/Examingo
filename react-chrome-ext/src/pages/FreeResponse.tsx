import CheckAnswerButton from "../components/CheckAnswerButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";
import TextBox from "../components/TextBox";

const FreeResponse = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-background-purple space-y-5">
      <LogoText />
      <Question questionText="What is Democracy?" />
      <TextBox text="I don't know." />
      <CheckAnswerButton buttonText="Check" />
      <SaveQuestionButton />
    </div>
  );
};

export default FreeResponse;
