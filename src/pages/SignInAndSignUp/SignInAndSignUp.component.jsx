import React from "react";

import SignIn from "@components/sign-in/sign-in.component";
import SignUp from "@components/sign-up/sign-up.component";
import { SignInAndSignUpContainer } from "./SignInAndSignUp.styles";

export const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};
