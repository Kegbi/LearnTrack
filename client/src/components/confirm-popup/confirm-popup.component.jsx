import React, { useState } from "react";
import { createPortal } from "react-dom";

import Dialog from "../dialog/dialog.component";

const Confirm = (props) => {
  const [isOpen, setOpen] = useState(false);

  const { message, children } = props;

  const confirm = () => {
    setOpen(true);
  };

  const cancel = () => {
    setOpen(false);
  };

  const ok = () => {
    const { callback } = props;

    setOpen(false);

    callback();
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <Dialog message={message} ok={ok} cancel={cancel} />,
          document.body
        )}
      {children(confirm)}
    </>
  );
};

export default Confirm;
