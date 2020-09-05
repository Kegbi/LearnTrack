import React from "react";
import FormInput from "../form-input/form-input.component";

const LoginSignupFormFields = ({ userCredentials, setCredentials }) => {
  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const { username, password } = userCredentials;

  return (
    <>
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
    </>
  );
};

export default LoginSignupFormFields;
