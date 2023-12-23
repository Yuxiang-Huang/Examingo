import { useNavigate } from "react-router-dom";
// import ExamingoLogo from "./components/ExamingoLogo.png";
import "./HomePage.css";
import { Readability } from "@mozilla/readability";
import { useState } from "react";
import LogoText from "./LogoText";

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
    chrome.tabs
      .query({ active: true, currentWindow: true })
      .then(function (tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;
        if (activeTabId != undefined)
          return chrome.scripting.executeScript({
            target: { tabId: activeTabId },
            func: DOMtoString,
          });
      })
      .then(function (results) {
        if (results != undefined)
          console.log(JSON.stringify(results[0].result));
      })
      .catch(function (error) {
        alert("There was an error injecting script : \n" + error.message);
      });
  };

  function DOMtoString() {
    return document.documentElement.innerHTML;
  }

  return (
    <div className="HomePage">
      <header className="Home-page-header bg-background-purple">
        {/* <img src={ExamingoLogo} className="Logo" alt="logo" /> */}
        <LogoText />
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
