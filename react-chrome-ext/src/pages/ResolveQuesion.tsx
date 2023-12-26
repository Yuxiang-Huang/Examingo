import { useState } from "react";
import CheckAnswerButton from "../components/CheckAnswerButton";
import LogoText from "../components/LogoText";
import Question from "../components/Question";
import SaveQuestionButton from "../components/SaveQuestionButton";
import TextBox from "../components/TextBox";
import FRRQTemplate from "./FRRQTemplate";

const ResolveQuesiton = () => {
  return (
    <FRRQTemplate
      questionText="Type Your Question"
      checkAnswerButtonText="Resolve"
    />
  );
};

export default ResolveQuesiton;
