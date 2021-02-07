import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginSignupFormFields from "../../components/signin-signup-form-fields/login-signup-form-fields.component";
import { signInStart, signUpStart } from "../../redux/user/user.actions";

import {
  ButtonsColumnContainer,
  CustomButtons,
} from "../../components/custom-buttons/custom-buttons";

import {
  LoginSignupForm,
  PageContainer,
  PageContent,
} from "./signin-signup.styles";

const LoginSignupContainer = ({ loginPage }) => {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userCredentials;

  let history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    loginPage
      ? dispatch(signInStart(username, password))
      : dispatch(signUpStart(username, password));
  };

  return (
    <PageContainer>
      <PageContent>
        {loginPage ? (
          <h1>Sign-in into your account and continue your Learning Track!</h1>
        ) : (
          <h1>Sign-up into your account and start your Learning Track!</h1>
        )}
        <LoginSignupForm onSubmit={handleSubmit}>
          <LoginSignupFormFields
            setCredentials={setCredentials}
            userCredentials={userCredentials}
          />
          {loginPage ? (
            <ButtonsColumnContainer marginTop={"sm"}>
              <CustomButtons type={"submit"}>Sign-in</CustomButtons>
              <CustomButtons
                type={"button"}
                onClick={() => history.push("/signup")}
                textButton
              >
                Sign-up
              </CustomButtons>
            </ButtonsColumnContainer>
          ) : (
            <ButtonsColumnContainer marginTop={"sm"}>
              <CustomButtons type={"submit"}>Sign-up</CustomButtons>
              <CustomButtons
                type={"button"}
                onClick={() => history.push("/login")}
                textButton
              >
                Sign-in
              </CustomButtons>
            </ButtonsColumnContainer>
          )}
        </LoginSignupForm>
      </PageContent>
    </PageContainer>
  );
};

export default LoginSignupContainer;
