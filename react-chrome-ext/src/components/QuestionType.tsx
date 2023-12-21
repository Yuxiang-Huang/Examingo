import { useNavigate } from "react-router-dom";

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
      <button onClick={gotToMCPage}>Multiple Choice</button>
      <button onClick={goToFRPage}>Free Response</button>
    </div>
  );
};

export default QuestionType;
