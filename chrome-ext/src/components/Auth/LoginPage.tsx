import { useRef } from "react";
import LogoText from "../LogoText";
import NavButton from "../NavButton";
import InputField from "./InputField";
import axios from "axios";
import bcrypt from "bcryptjs-react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({}) => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    if (usernameRef.current && passwordRef.current) {
      const curPassword = passwordRef.current.value;
      axios
        .get(`http://localhost:8000/`, {
          params: { username: usernameRef.current.value },
        })
        .then((response) => {
          if (response.data == null) {
            alert("Username doesn't exist!");
          } else {
            if (bcrypt.compareSync(curPassword, response.data.password)) {
              alert("Success!");
            } else {
              alert("Wrong Password!");
            }
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <LogoText />
      <InputField label="Username" textRef={usernameRef} />
      <InputField label="Password" textRef={passwordRef} />
      <NavButton buttonText={"Login"} clickFunction={handleLogin} />
      <NavButton
        buttonText={"Doesn't have account"}
        clickFunction={goToSignUpPage}
      />
    </div>
  );
};

export default LoginPage;
