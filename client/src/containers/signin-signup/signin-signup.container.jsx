import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginSignupFormFields from "../../components/signin-signup-form-fields/login-signup-form-fields";
import { signInStart, signUpStart } from "../../redux/user/user.actions";

import {
  ButtonsColumnContainer,
  CustomButton,
} from "../../components/custom-button";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-top: 50px;
  flex-grow: 1;
`;

export const Content = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const LoginSignupForm = styled.form`
  width: 50%;
`;

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
    <Container>
      <Content>
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
              <CustomButton type={"submit"}>Sign-in</CustomButton>
              <CustomButton
                type={"button"}
                onClick={() => history.push("/signup")}
                textButton
              >
                Sign-up
              </CustomButton>
            </ButtonsColumnContainer>
          ) : (
            <ButtonsColumnContainer marginTop={"sm"}>
              <CustomButton type={"submit"}>Sign-up</CustomButton>
              <CustomButton
                type={"button"}
                onClick={() => history.push("/login")}
                textButton
              >
                Sign-in
              </CustomButton>
            </ButtonsColumnContainer>
          )}
        </LoginSignupForm>
      </Content>
    </Container>
  );
};

export default LoginSignupContainer;
