import { useNavigate } from "react-router-dom";
// import ExamingoLogo from "./components/ExamingoLogo.png";
import LogoText from "../LogoText";
import NavButton from "../NavButton";
import axios from "axios";
import type { User } from "@prisma/client";

const HomePage = () => {
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://ozb4bxgszg.execute-api.us-east-1.amazonaws.com/Dev"
  //     );
  //     console.log(response.data.body);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // fetchData();

  // axios
  //   .get<User[]>("http://localhost:8000/")
  //   .then((response) => console.log(response.data))
  //   .catch((error) => console.error(error));

  // axios
  //   .post("http://localhost:8000/create", { name: "Diego" })
  //   .then(() => console.log("Created"))
  //   .catch((err) => {
  //     console.error(err);
  //   });

  const navigate = useNavigate();

  const gotToQuestionTypePage = () => {
    navigate("/QuestionType");
  };

  const goToResolveQuestionPage = () => {
    navigate("/ResolveQuestion");
  };

  const goToLoginPage = () => {
    navigate("/Login");
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

      <NavButton
        buttonText="Personalize Learning"
        clickFunction={goToLoginPage}
      />
    </div>
  );
};

export default HomePage;
