import React, { useState } from "react";
import axios from "axios";
import { urlConstants } from "../../constants/urlConstants";

import { Photo, PhotoContainer } from "./item-page-photo.styles";
import { UnknownPhoto } from "../../ui-kit/unknown-photo/unknown-photo.styles";

import Loader from "../loader/loader.component";

const ItemPagePhotoComponent = ({
  isEditing,
  item,
  setItem,
  pushNotification,
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
        const { data } = await axios.post(urlConstants.uploadImage, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
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
          src={`${urlConstants.images}/${item.image}`}
          alt={"item-photo"}
        />
      ) : (
        <UnknownPhoto />
      )}
    </PhotoContainer>
  );
};

export default ItemPagePhotoComponent;
