import React from "react";
import { GroupContainer, FormInputContainer } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      placeholder={label}
      onChange={handleChange}
      {...props}
    />
  </GroupContainer>
);

export default FormInput;
