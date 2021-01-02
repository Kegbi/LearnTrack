import React from "react";
import ConfirmContainer from "../../components/confirm-popup/confirm-popup.component";

const ConfirmPopup = ({
  header,
  content,
  pushNotification,
  confirmOpen,
  setConfirmOpen,
}) => {
  const handleConfirm = () => {
    setConfirmOpen(false);
    pushNotification("Error", "File wasn't loaded", "Error saving your image");
  };

  const handleCancel = () => {
    setConfirmOpen(false);
  };
  return (
    <>
      {confirmOpen ? (
        <ConfirmContainer
          header={header}
          content={content}
          confirmOpen={confirmOpen}
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      ) : null}
    </>
  );
};

export default ConfirmPopup;
