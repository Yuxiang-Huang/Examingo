import { useRef } from "react";
import LogoText from "../LogoText";
import NavButton from "../NavButton";
import InputField from "./InputField";
import axios from "axios";
import bcrypt from "bcryptjs-react";

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const hangleSignUp = () => {
    if (usernameRef.current && passwordRef.current) {
      var password = bcrypt.hashSync(passwordRef.current.value, 10);
      axios
        .post("http://localhost:8000/create", {
          username: usernameRef.current.value,
          password: password,
        })
        .then(() => console.log("Created"))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <LogoText />
      <InputField label="Username" textRef={usernameRef} />
      <InputField label="Password" textRef={passwordRef} />
      <NavButton buttonText={"Login"} clickFunction={hangleSignUp} />
    </div>
  );
};

export default SignUp;
