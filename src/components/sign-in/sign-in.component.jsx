/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";

import { auth, signInWithGoogle } from "@lib/firebase";
import {
  ButtonsContainer,
  SignInContainer,
  SignInHeader,
} from "./sign-in.styles";
import CustomButton from "@components/common/custom-button/custom-button.component";
import FormInput from "@components/common/form-input/form-input.component";
import { useInput } from "@hooks/useInput";

const SignIn = ({ history }) => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      console.error("Error during sign in", error);
    }
  };

  return (
    <SignInContainer>
      <SignInHeader>I already have an account</SignInHeader>
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
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            variant="primary"
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default withRouter(SignIn);
