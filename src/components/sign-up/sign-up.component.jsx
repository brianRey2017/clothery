import { useInput } from "@hooks/useInput";
import React from "react";
import "./sign-up.styles.scss";

const SignUp = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up">
      <h2>SIGN UP</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={setEmail}
          required
          type="email"
          value={email}
        />
        <label htmlFor="email"></label>
        <input
          name="password"
          onChange={setPassword}
          required
          type="password"
          value={password}
        />
        <label htmlFor="password"></label>
      </form>
    </div>
  );
};

export default SignUp;
