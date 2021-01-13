import React from "react";

import {
  DialogBody,
  DialogButtonsGroup,
  DialogMessage,
  DialogOverlay,
  DialogTitle,
} from "./dialog.styles";
import { AcceptButton, DeclineButton } from "../../ui-kit/buttons/buttons";

const Dialog = (props) => {
  const { title, message, confirmText, declineText, alert, ok, cancel } = props;

  return (
    <DialogOverlay>
      <DialogBody>
        <DialogTitle>{title}</DialogTitle>
        <DialogMessage>{message}</DialogMessage>
        <DialogButtonsGroup>
          <AcceptButton alert={alert} onClick={ok}>
            {confirmText}
          </AcceptButton>
          <DeclineButton onClick={cancel}>{declineText}</DeclineButton>
        </DialogButtonsGroup>
      </DialogBody>
    </DialogOverlay>
  );
};

export default Dialog;
