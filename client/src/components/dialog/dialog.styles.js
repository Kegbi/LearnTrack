import styled from "styled-components";
import { green, grey, red } from "../../global.styles";

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: ${(p) => p.theme.zIndex.xl};
`;

export const DialogBody = styled.div`
  margin-top: 20vh;
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
