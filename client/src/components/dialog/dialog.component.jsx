import React from "react";

import {
  AcceptButton,
  DeclineButton,
  DialogBody,
  DialogButtonsGroup,
  DialogMessage,
  DialogOverlay,
  DialogTitle,
} from "./dialog.styles";

const Dialog = (props) => {
  const {
    title,
    message,
    confirmText,
    declineText,
    actionColor,
    ok,
    cancel,
  } = props;

  return (
    <DialogOverlay>
      <DialogBody>
        <DialogTitle>{title}</DialogTitle>
        <DialogMessage>{message}</DialogMessage>
        <DialogButtonsGroup>
          <AcceptButton actionColor={actionColor} onClick={ok}>
            {confirmText}
          </AcceptButton>
          <DeclineButton onClick={cancel}>{declineText}</DeclineButton>
        </DialogButtonsGroup>
      </DialogBody>
    </DialogOverlay>
  );
};

export default Dialog;
