import styled from "styled-components";
import { green, grey, red } from "../../global.styles";

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;

export const DialogBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 25px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  max-width: 550px;
`;

export const DialogTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
`;

export const DialogMessage = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
`;

export const DialogButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CleanDialogButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  font-weight: normal;
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
