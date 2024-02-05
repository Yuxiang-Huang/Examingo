import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton";
import LogoText from "./LogoText";

const QuestionType = () => {
  const navigate = useNavigate();

  const gotToMCPage = () => {
    navigate("/MultipleChoice");
  };

  const goToFRPage = () => {
    navigate("/FreeResponse");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-center space-y-12">
      <LogoText />
      <NavButton buttonText="Multiple Choice" clickFunction={gotToMCPage} />
      <NavButton buttonText="Free Response" clickFunction={goToFRPage} />
    </div>
  );
};

export default QuestionType;
