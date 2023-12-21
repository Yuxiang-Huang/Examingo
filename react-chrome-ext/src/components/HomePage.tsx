import { useNavigate } from "react-router-dom";
import ExamingoLogo from "./components/ExamingoLogo.png";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const gotToQuestionTypePage = () => {
    navigate("/QuestionType");
  };

  const goToResolveQuestionPage = () => {
    navigate("/ResolveQuestion");
  };

  return (
    <div className="HomePage">
      <header className="Home-page-header">
        <img src={ExamingoLogo} className="Logo" alt="logo" />
        <p className="MiddleText">
          <b>Examingo</b>
        </p>
        <button onClick={gotToQuestionTypePage}>Test Yourself</button>
        <button onClick={goToResolveQuestionPage}>Resolve Questions</button>
        <button>
          <a href="#">Personalize Learning</a>
        </button>
      </header>
    </div>
  );
};

export default HomePage;
