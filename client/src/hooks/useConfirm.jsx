import React, { useState } from "react";

import Dialog from "../components/dialog/dialog.component";

export const useConfirm = (
  callback,
  title,
  message,
  confirmText,
  declineText,
  type
) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const cancel = () => setIsOpen(false);

  const ok = () => {
    setIsOpen(false);
    callback();
  };

  const ConfirmDialog = () => (
    <Dialog
      title={title}
      message={message}
      confirmText={confirmText}
      declineText={declineText}
      setIsOpen={setIsOpen}
      type={type}
      ok={ok}
      cancel={cancel}
    />
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
