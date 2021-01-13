import styled from "styled-components";
import { controllers_text, green, grey, red } from "../../global.styles";

const CleanDialogButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  font-weight: normal;
  outline: none;
`;

export const TextBtn = styled(CleanDialogButton)`
  font-size: 2rem;
  font-weight: 500;
  margin-left: ${(props) => (props.ml ? props.ml : 25)}px;
  color: ${controllers_text};
  cursor: pointer;
`;

export const AcceptButton = styled(CleanDialogButton)`
  font-size: 1rem;
  background-color: ${(props) => (props.alert ? red : green)};
  color: white;
  padding: 10px;
  min-width: 150px;
  border-radius: 7px;
  margin-bottom: 5px;
`;

export const DeclineButton = styled(CleanDialogButton)`
  color: ${grey};
  font-size: 0.8rem;
`;
