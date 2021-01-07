import React, { useState } from "react";
import { createPortal } from "react-dom";
import Dialog from "../components/dialog/dialog.component";

export const useConfirm = (
  callback,
  title,
  message,
  confirmText,
  declineText,
  alert
) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const cancel = () => setIsOpen(false);

  const ok = () => {
    setIsOpen(false);
    callback();
  };

  const ConfirmDialog = () =>
    createPortal(
      <Dialog
        title={title}
        message={message}
        confirmText={confirmText}
        declineText={declineText}
        alert={alert}
        ok={ok}
        cancel={cancel}
      />,
      document.body
    );

  const Confirm = (props) => (
    <>
      {props.children}
      {isOpen && <ConfirmDialog />}
    </>
  );

  return {
    open,
    Confirm,
  };
};
