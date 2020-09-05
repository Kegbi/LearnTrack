import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ButtonsBarContainer } from "../../components/custom-button/custom-button.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import LoginSignupFormFields from "../../components/signin-signup-form-fields/login-signup-form-fields.component";
import { signInStart, signUpStart } from "../../redux/user/user.actions";
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
            <ButtonsBarContainer>
              <CustomButton type={"submit"}>Sign-in</CustomButton>
              <CustomButton
                type={"button"}
                onClick={() => history.push("/signup")}
                textButton
              >
                Sign-up
              </CustomButton>
            </ButtonsBarContainer>
          ) : (
            <ButtonsBarContainer>
              <CustomButton type={"submit"}>Sign-up</CustomButton>
              <CustomButton
                type={"button"}
                onClick={() => history.push("/login")}
                textButton
              >
                Sign-in
              </CustomButton>
            </ButtonsBarContainer>
          )}
        </LoginSignupForm>
      </PageContent>
    </PageContainer>
  );
};

export default LoginSignupContainer;
