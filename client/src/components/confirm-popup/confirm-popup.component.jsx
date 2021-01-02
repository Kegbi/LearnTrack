import React from "react";
import {
  ConfirmContainerBg,
  ConfirmContainerBody,
} from "../../containers/confirm-popup/confirm-container.styles";

const ConfirmContainer = ({
  header,
  content,
  confirmOpen,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <ConfirmContainerBg>
      <ConfirmContainerBody
        style={{
          width: "500px",
          height: "500px",
          "background-color": "grey",
        }}
      >
        <div>{header}</div>
        <div>{content}</div>
        <button onClick={handleConfirm}>Press me more to say yes</button>
        <button onClick={handleCancel}>Cancel all of this!</button>
      </ConfirmContainerBody>
    </ConfirmContainerBg>
  );
};

export default ConfirmContainer;
