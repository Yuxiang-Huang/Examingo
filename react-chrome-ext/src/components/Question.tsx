import React from "react";

interface QuestionProps {
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return (
    <div>
      <p className="font-extralight">{questionText} </p>
      <div className="relative">
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-primary-purple to-primary-red"></span>
      </div>
    </div>
  );
};

export default Question;
