import CustomButton from "@components/common/custom-button/custom-button.component";
import FormInput from "@components/common/form-input/form-input.component";
import React from "react";
import { withRouter } from "react-router-dom";

import { auth, signInWithGoogle } from "@lib/firebase";
import { useInput } from "@hooks/useInput";
import UsersService from "@services/users";
import {
  ButtonsContainer,
  SignUpContainer,
  SignUpHeader,
} from "./sign-up.styles";

// eslint-disable-next-line react/prop-types
const SignUp = ({ history }) => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [displayName, handleDisplayNameChange] = useInput("");
  const [passwordConfirm, handlePasswordConfirmChange] = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);

      await UsersService.createUser(user, { displayName });
      // eslint-disable-next-line react/prop-types
      history.push("/");
    } catch (error) {
      console.error("Error during user creation", error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpHeader>I do not have an account</SignUpHeader>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleDisplayNameChange}
          label="display name"
          name="displayName"
          required
          type="text"
          value={displayName}
        />
        <FormInput
          handleChange={handleEmailChange}
          label="email"
          name="email"
          required
          type="email"
          value={email}
        />
        <FormInput
          handleChange={handlePasswordChange}
          label="password"
          name="password"
          required
          type="password"
          value={password}
        />
        <FormInput
          handleChange={handlePasswordConfirmChange}
          label="password confirm"
          name="password-confirm"
          required
          type="password"
          value={passwordConfirm}
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign Up</CustomButton>
          <CustomButton onClick={signInWithGoogle} variant="primary">
            Sign up with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default withRouter(SignUp);
