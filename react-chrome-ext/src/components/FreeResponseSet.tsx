import { useState } from "react";
import CheckAnswerButton from "./CheckAnswerButton";
import Question from "./Question";
import SaveQuestionButton from "./SaveQuestionButton";
import TextBox from "./TextBox";

interface FreeResponseSetProps {
  question: string;
  answer: string;
}

const FreeResponseSet: React.FC<FreeResponseSetProps> = ({
  question,
  answer,
}) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <div>
      <Question questionText={question} />
      <TextBox
        initialText=""
        isReadOnly={displayAnswer}
        textFunction={() => false}
      />
      {displayAnswer && (
        <TextBox
          initialText={answer}
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

export default FreeResponseSet;
