import { useState } from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SaveQuestionButton from "../SaveQuestionButton";
import TextBox from "../TextBox";

const ResolveQuesiton = () => {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <div>
      <LogoText />
      <Question questionText="Type Your Question" />
      <TextBox
        initialText=""
        isReadOnly={displayAnswer}
        textFunction={() => false}
      />
      {displayAnswer && (
        <TextBox
          initialText="I don't know."
          isReadOnly={true}
          textFunction={() => false}
        />
      )}
      {!displayAnswer && (
        <CheckAnswerButton
          buttonText="Answer"
          checkAnswerFunction={() => setDisplayAnswer(true)}
        />
      )}
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default ResolveQuesiton;
