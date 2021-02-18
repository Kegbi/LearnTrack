import React from "react";

import styled from "styled-components";

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: ${(p) => p.theme.colors.white} none;
  color: ${(p) => p.theme.colors.black};
  font-size: 1.2rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.grey[600]};
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;

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
