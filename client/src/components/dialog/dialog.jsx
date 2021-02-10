import React, { useEffect } from "react";

import { ButtonsColumnContainer, CustomButton } from "../custom-button";
import { Overlay } from "../layout";

import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: ${(p) => p.theme.zIndex.xl};
`;

export const Body = styled.div`
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
  z-index: ${(p) => p.theme.zIndex.md};
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
`;

export const Message = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
`;

const Dialog = ({
  title,
  message,
  confirmText,
  declineText,
  type,
  ok,
  cancel,
}) => {
  function dialogKeyPressHandler(e) {
    if (e.keyCode === 27) {
      cancel();
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", dialogKeyPressHandler);
    return () => document.removeEventListener("keyup", dialogKeyPressHandler);
  }, []);

  return (
    <Wrapper>
      <Overlay onClick={cancel} />
      <Body>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonsColumnContainer>
          <CustomButton type={type} mb={"xs"} br onClick={ok}>
            {confirmText}
          </CustomButton>
          <CustomButton textButton fz={"0.8rem"} onClick={cancel}>
            {declineText}
          </CustomButton>
        </ButtonsColumnContainer>
      </Body>
    </Wrapper>
  );
};

export default Dialog;
