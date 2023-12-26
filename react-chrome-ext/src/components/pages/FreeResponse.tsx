import { useState } from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SaveQuestionButton from "../SaveQuestionButton";
import TextBox from "../TextBox";

const FreeResponse = () => {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <div>
      <LogoText />
      <Question questionText="What is democracy?" />
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
          buttonText="Check"
          checkAnswerFunction={() => setDisplayAnswer(true)}
        />
      )}
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default FreeResponse;
