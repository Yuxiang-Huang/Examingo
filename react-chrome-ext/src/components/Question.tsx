import React from "react";

interface QuestionProps {
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return (
  <div className="mb-5 em:text-lg">
    <h1 className="flex justify-center w-full">{questionText}</h1>
    <div className="w-full h-0.5 bg-gradient-to-r from-primary-purple to-primary-red"></div>
  </div>
  );
};

export default Question;
