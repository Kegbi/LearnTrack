import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonsBarContainer } from "../../components/custom-button/custom-button.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import {
  LoginForm,
  LoginPageContainer,
  LoginPageContent,
} from "./LoginPage.styles";
import { useDispatch } from "react-redux";
import { signInStart } from "../../redux/user/user.actions";

const LoginPage = () => {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { username, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(signInStart(username, password));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  let history = useHistory();

  return (
    <LoginPageContainer>
      <LoginPageContent>
        <h1>Login into your account and continue your Learning Track!</h1>
        <LoginForm onSubmit={handleSubmit}>
          <FormInput
            name={"username"}
            type={"text"}
            handleChange={handleChange}
            value={username}
            label={"Username"}
            required
          />
          <FormInput
            name={"password"}
            type={"password"}
            handleChange={handleChange}
            value={password}
            label={"Password"}
            required
          />
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
        </LoginForm>
      </LoginPageContent>
    </LoginPageContainer>
  );
};

export default LoginPage;
