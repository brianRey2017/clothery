import CustomButton from "@components/common/custom-button/custom-button.component";
import FormInput from "@components/common/form-input/form-input.component";
import React from "react";
import { withRouter } from "react-router-dom";

import { auth, signInWithGoogle } from "@lib/firebase";
import { useInput } from "@hooks/useInput";
import UsersService from "@services/users";
import "./sign-up.styles.scss";

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
    <div className="sign-up">
      <h1>I do not have an account</h1>
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
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
          <CustomButton onClick={signInWithGoogle} variant="primary">
            Sign up with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
