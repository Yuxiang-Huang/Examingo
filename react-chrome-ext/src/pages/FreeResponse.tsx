import { useState } from "react";
import CheckAnswerButton from "../components/CheckAnswerButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";
import TextBox from "../components/TextBox";
import FRRQTemplate from "./FRRQTemplate";

const FreeResponse = () => {
  return (
    <FRRQTemplate
      questionText="What is democracy?"
      checkAnswerButtonText="Check"
    />
  );
};

export default FreeResponse;
