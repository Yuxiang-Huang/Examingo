import { useState } from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SaveQuestionButton from "../SaveQuestionButton";
import TextBox from "../TextBox";

const ResolveQuesiton = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <LogoText />
      <Question questionText="Type Your Question" />
      <TextBox initialText="" isReadOnly={display} textFunction={() => false} />
      {display && (
        <TextBox
          initialText="I don't know."
          isReadOnly={true}
          textFunction={() => false}
        />
      )}
      {!display && (
        <CheckAnswerButton
          buttonText="Answer"
          checkAnswerFunction={() => setDisplay(true)}
        />
      )}
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default ResolveQuesiton;
