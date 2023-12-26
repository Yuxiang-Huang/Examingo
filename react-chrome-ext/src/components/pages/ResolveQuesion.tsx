import CheckAnswerButton from "../CheckAnswerButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SaveQuestionButton from "../SaveQuestionButton";
import TextBox from "../TextBox";

const ResolveQuesiton = () => {
  return (
    <div>
      <LogoText />
      <Question questionText="Type Your Question" />
      <TextBox initialText="" isReadOnly={false} textFunction={() => false} />
      <CheckAnswerButton
        buttonText="Answer"
        checkAnswerFunction={() => false}
      />
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default ResolveQuesiton;
