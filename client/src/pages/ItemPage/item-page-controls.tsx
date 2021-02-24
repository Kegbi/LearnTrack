import React from "react";
import { useHistory } from "react-router-dom";

import { ItemType } from "../../types/item.types";

import { useConfirm } from "../../hooks/useConfirm";

import { buttonTypeConstants } from "../../constants/buttonTypeConstants";

import styled from "styled-components";

import { CustomButton } from "../../components/custom-button";
import { BackArrow } from "../../components/icons";

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackControlGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
`;

type ControlsProps = {
  admin: boolean;
  isEditing: boolean;
  saveCard: () => void;
  cancelEditing: () => void;
  startEditing: () => void;
  deleteAction: () => void;
  type: ItemType;
};

const ItemPageControls = ({
  admin,
  isEditing,
  saveCard,
  cancelEditing,
  startEditing,
  deleteAction,
  type,
}: ControlsProps) => {
  const history = useHistory();

  const { open, Confirm } = useConfirm(
    deleteAction,
    "Do you want to delete this item?",
    "The item will be deleted and you won't be able to restore it later",
    "Delete",
    "No, I changed my mind",
    buttonTypeConstants.alert
  );

  return (
    <ControlsContainer>
      <BackControlGroup onClick={() => history.push(`/${type}s/`)}>
        <BackArrow />
        <CustomButton textButton fw={"medium"} fz={"2rem"} ml={"sm"}>
          Back
        </CustomButton>
      </BackControlGroup>
      {admin ? (
        <ControlsGroup>
          {isEditing ? (
            <Confirm>
              <CustomButton
                textButton
                fw={"medium"}
                fz={"2rem"}
                ml={"sm"}
                onClick={saveCard}
              >
                Save
              </CustomButton>
              <CustomButton
                textButton
                fw={"medium"}
                fz={"2rem"}
                ml={"sm"}
                onClick={cancelEditing}
              >
                Cancel
              </CustomButton>
            </Confirm>
          ) : (
            <Confirm>
              <CustomButton
                textButton
                fw={"medium"}
                fz={"2rem"}
                ml={"sm"}
                onClick={startEditing}
              >
                Edit
              </CustomButton>
              <CustomButton
                textButton
                fw={"medium"}
                fz={"2rem"}
                ml={"sm"}
                onClick={open}
              >
                Delete
              </CustomButton>
            </Confirm>
          )}
        </ControlsGroup>
      ) : (
        <ControlsGroup />
      )}
    </ControlsContainer>
  );
};

export default React.memo(ItemPageControls);
