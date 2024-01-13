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
  const [inputText, setInputText] = useState("");
  const [answerText, setAnswerText] = useState(answer);

  return (
    <div>
      <Question questionText={question} />
      <TextBox
        text={inputText}
        setText={setInputText}
        isReadOnly={displayAnswer}
      />
      {displayAnswer && (
        <TextBox
          text={answerText}
          setText={setAnswerText}
          isReadOnly={true}
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
