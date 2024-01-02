import { useRef } from "react";
import LogoText from "../LogoText";
import NavButton from "../NavButton";
import InputField from "./InputField";
import axios from "axios";
import bcrypt from "bcryptjs-react";

const LoginPage = ({}) => {
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
          console.log(bcrypt.compareSync(curPassword, response.data.password));
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
    </div>
  );
};

export default LoginPage;
