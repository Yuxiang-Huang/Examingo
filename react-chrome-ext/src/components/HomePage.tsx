import { useNavigate } from "react-router-dom";
// import ExamingoLogo from "./components/ExamingoLogo.png";
import "./HomePage.css";
import { Readability } from "@mozilla/readability";
import { useState } from "react";

const HomePage = () => {
  const [displayText, setDisplayText] = useState("Test Usability");

  const navigate = useNavigate();

  const gotToQuestionTypePage = () => {
    navigate("/QuestionType");
  };

  const goToResolveQuestionPage = () => {
    navigate("/ResolveQuestion");
  };

  const testReadibility = () => {
    var article = new Readability(document).parse();
    alert(article?.content);
    // let result = "";
    // result += article?.content;
    // console.log(article);
    // console.log(result);
    // setDisplayText("Hello");
  };

  return (
    <div className="HomePage">
      <header className="Home-page-header">
        {/* <img src={ExamingoLogo} className="Logo" alt="logo" /> */}
        <p className="MiddleText">
          <b>Examingo</b>
        </p>
        <button onClick={gotToQuestionTypePage}>Test Yourself</button>
        <button onClick={goToResolveQuestionPage}>Resolve Questions</button>
        <button>
          <a href="#">Personalize Learning</a>
        </button>
        <button onClick={testReadibility}>{displayText}</button>
      </header>
    </div>
  );
};

export default HomePage;
