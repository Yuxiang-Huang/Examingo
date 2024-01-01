import React from "react";
import { useNavigate } from "react-router-dom";

const LogoText = () => {
  const navigate = useNavigate();

  const goToResolveQuestionPage = () => {
    navigate("/");
  };

  return (
    <button onClick={goToResolveQuestionPage} className="em:text-3xl em:leading-7 tracking-wide w-full flex justify-center space-x-0.5">
      <span className="italic font-bold bg-gradient-to-r from-primary-red to-primary-purple text-transparent bg-clip-text">
        Exam
      </span>
      <span>ingo</span>
    </button>
  );
};

export default LogoText;
