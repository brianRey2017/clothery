/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";

import { auth, signInWithGoogle } from "@lib/firebase";
import CustomButton from "@components/common/custom-button/custom-button.component";
import FormInput from "@components/common/form-input/form-input.component";
import { useInput } from "@hooks/useInput";
import "./sign-in.styles.scss";

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
          <CustomButton
            onClick={signInWithGoogle}
            variant="primary"
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
