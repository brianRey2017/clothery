import CustomButton from "@components/custom-button/custom-button.component";
import FormInput from "@components/form-input/form-input.component";
import React, { useState } from "react";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={() => setEmail()}
          label="email"
          name="email"
          required
          type="email"
          value={email}
        />
        <FormInput
          handleChange={() => setPassword()}
          label="password"
          name="password"
          required
          type="password"
          value={password}
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
