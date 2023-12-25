import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
import LogoText from "../components/LogoText";

const QuestionType = () => {
  const navigate = useNavigate();

  const gotToMCPage = () => {
    navigate("/MultipleChoice");
  };

  const goToFRPage = () => {
    navigate("/FreeResponse");
  };

  return (
    <div>
      <LogoText />
      <NavButton buttonText="Multiple Choice" clickFunction={gotToMCPage} />
      <NavButton buttonText="Free Response" clickFunction={goToFRPage} />
    </div>
  );
};

export default QuestionType;
