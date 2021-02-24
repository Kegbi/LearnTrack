import React, { useState } from "react";
import { apiConstants } from "../../constants/urlConstants";

import { UnknownPhotoIcon } from "../../components/icons";

import Loader from "../../components/loader/loader";

import styled from "styled-components";
import IconsBlock from "../../components/icons-block";

const PhotoBlockContainer = styled.div`
  width: 570px;
  margin-right: 115px;
  background-color: ${(p) => p.theme.colors.grey[200]};
`;

const PhotoContainer = styled.label`
  width: 570px;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 100%;
  height: 470px;
`;

const ItemPagePhotoBlock = ({
  isEditing,
  item,
  setItem,
  pushNotification,
  reactions,
}) => {
  const [photoLoading, togglePhotoLoading] = useState(false);

  const changePhoto = (event) => {
    if (event.target.files.length === 0) return;
    try {
      let files = event.target.files;
      const sendFiles = async (event) => {
        let formData = new FormData();
        formData.append("file", files[0]);
        togglePhotoLoading(true);
        const response = await fetch(apiConstants.uploadImage, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          setItem({ ...item, image: data.message });
          setTimeout(function () {
            togglePhotoLoading(false);
          }, 500);
        } else {
          pushNotification(
            "Error saving your image",
            "File wasn't loaded",
            true
          );
        }
      };
      return sendFiles();
    } catch (err) {
      pushNotification(
        "Photo wasn't loaded",
        "Something went wrong with uploading your photo",
        true
      );
    }
  };

  return (
    <PhotoBlockContainer>
      <PhotoContainer>
        {isEditing ? (
          <input
            type={"file"}
            accept={"image/*"}
            name={"photo"}
            id={"file"}
            hidden
            onChange={changePhoto}
          />
        ) : null}
        {photoLoading ? (
          <Loader />
        ) : item.image.length ? (
          <Photo
            src={`${apiConstants.images}/${item.image}`}
            alt={"item-photo"}
          />
        ) : (
          <UnknownPhotoIcon />
        )}
      </PhotoContainer>
      <IconsBlock counters={true} big={true} reactions={reactions} />
    </PhotoBlockContainer>
  );
};

export default React.memo(ItemPagePhotoBlock);
