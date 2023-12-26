import CheckAnswerButton from "../CheckAnswerButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SaveQuestionButton from "../SaveQuestionButton";
import TextBox from "../TextBox";

const FreeResponse = () => {
  return (
    <div>
      <LogoText />
      <Question questionText="What is Democracy?" />
      <TextBox
        initialText="I don't know."
        isReadOnly={false}
        textFunction={() => false}
      />
      <CheckAnswerButton buttonText="Check" checkAnswerFunction={() => false} />
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default FreeResponse;
