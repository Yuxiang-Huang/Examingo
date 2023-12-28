import { useNavigate } from "react-router-dom";
// import ExamingoLogo from "./components/ExamingoLogo.png";
import LogoText from "../LogoText";
import NavButton from "../NavButton";

import axios from "axios";

const HomePage = () => {
  axios
    .get("http://localhost:8000/")
    .then((response) => console.log(response.data[0].name))
    .catch((error) => console.error(error));

  const navigate = useNavigate();

  const gotToQuestionTypePage = () => {
    navigate("/QuestionType");
  };

  const goToResolveQuestionPage = () => {
    navigate("/ResolveQuestion");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* <img src={ExamingoLogo} className="Logo" alt="logo" /> */}
      <LogoText />
      <NavButton
        buttonText="Test Yourself"
        clickFunction={gotToQuestionTypePage}
      />
      <NavButton
        buttonText="Resolve Questions"
        clickFunction={goToResolveQuestionPage}
      />

      <NavButton buttonText="Personalize Learning" clickFunction={() => {}} />
    </div>
  );
};

export default HomePage;
