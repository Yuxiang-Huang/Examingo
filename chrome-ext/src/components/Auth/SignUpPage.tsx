import { useRef } from "react";

const LoginPage = ({}) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {};

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          ref={usernameRef}
          onChange={() => {
            console.log(usernameRef.current);
          }}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
