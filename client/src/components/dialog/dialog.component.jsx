import React, { useEffect, useRef } from "react";

import {
  DialogBody,
  DialogMessage,
  DialogOverlay,
  DialogTitle,
} from "./dialog.styles";

import { DeclineButton } from "../../ui-kit/buttons/buttons";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  ButtonsColumnContainer,
  CustomButtons,
} from "../custom-buttons/custom-buttons";

const Dialog = (props) => {
  const {
    title,
    message,
    confirmText,
    declineText,
    setIsOpen,
    type,
    ok,
    cancel,
  } = props;

  const dialogRef = useRef(null);
  useClickOutside(dialogRef, () => setIsOpen(false));

  function dialogKeyPressHandler(e) {
    if (e.keyCode === 27) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", dialogKeyPressHandler);
    return () => document.removeEventListener("keyup", dialogKeyPressHandler);
  }, []);

  return (
    <DialogOverlay>
      <DialogBody ref={dialogRef}>
        <DialogTitle>{title}</DialogTitle>
        <DialogMessage>{message}</DialogMessage>
        <ButtonsColumnContainer>
          <CustomButtons type={type} mb={5} radius onClick={ok}>
            {confirmText}
          </CustomButtons>
          <DeclineButton onClick={cancel}>{declineText}</DeclineButton>
        </ButtonsColumnContainer>
      </DialogBody>
    </DialogOverlay>
  );
};

export default Dialog;
