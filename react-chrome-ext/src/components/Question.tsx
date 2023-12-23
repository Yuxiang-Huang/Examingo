import React from "react";

interface QuestionProps {
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return <p className="underline">{questionText} </p>;
};

export default Question;
