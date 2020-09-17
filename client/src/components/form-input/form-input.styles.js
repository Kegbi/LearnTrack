import styled from "styled-components";
import { black, grey, white } from "../../global.styles";

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: ${white} none;
  color: ${black};
  font-size: 1.2rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${grey};
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;
