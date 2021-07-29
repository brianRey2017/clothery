import CustomButton from "@components/custom-button/custom-button.component";
import FormInput from "@components/form-input/form-input.component";
import React from "react";
import { useInput } from "@hooks/useInput";
import { signInWithGoogle } from "@lib/firebase";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={setEmail}
          label="email"
          name="email"
          required
          type="email"
          value={email}
        />
        <FormInput
          handleChange={setPassword}
          label="password"
          name="password"
          required
          type="password"
          value={password}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} variant="primary">
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
