import { useRef } from "react";
import LogoText from "../LogoText";
import NavButton from "../NavButton";
import InputField from "./InputField";

const LoginPage = ({}) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    if (usernameRef.current && passwordRef.current) {
      console.log(usernameRef.current.value);
      console.log(passwordRef.current.value);
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
