import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { urlConstants } from "../../constants/urlConstants";
import { getData } from "../../api/api";
import { useConfirm } from "../../hooks/useConfirm";
import { addNotification } from "../../redux/notifications/notifications.actions";
import { deleteCard, updateCard } from "../../redux/cards/cards.actions";

import {
  ItemName,
  IconGroup,
  IconsContainer,
  ItemPageContainer,
  Photo,
  PhotoContainer,
  PhotoGroupContainer,
  TextContainer,
  UnknownPhoto,
  ItemAuthor,
  ItemInfo,
  LikeIcon,
  BookmarkIcon,
  DislikeIcon,
  IconCounter,
  ControlsContainer,
  BackControlGroup,
  BackArrow,
  ControlsText,
  Container,
  ItemControlsGroup,
  BackArrowText,
  ItemAuthorEditing,
  ItemNameEditing,
  ItemInfoEditing,
} from "./ItemPage.styles";

import Loader from "../../components/loader/loader.component";
import Confirm from "../../components/confirm-popup/confirm-popup.component";

const ItemPage = ({ type, id, admin }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [item, setItem] = useState({});
  const [reactions, setReactions] = useState({});
  const [baseItem, setBaseItem] = useState({});
  const [isPending, togglePending] = useState(true);
  const [isEditing, toggleEditing] = useState(false);
  const [photoLoading, togglePhotoLoading] = useState(false);

  useEffect(() => {
    let link;
    if (type === "course") {
      link = urlConstants.courses;
    } else if (type === "book") {
      link = urlConstants.books;
    }
    const fetchData = async () => {
      const resp = await getData(`${link}/${id}`);
      await setItem(resp.info[0]);
      await setReactions({
        likes: resp.likes[0],
        stored: resp.stored[0],
        dislikes: resp.dislikes[0],
      });
      await setBaseItem(resp.info[0]);
      await togglePending(false);
    };
    fetchData();
  }, []);

  const pushNotification = (title, message, alert) => {
    dispatch(
      addNotification({
        title: title,
        message: message,
        alert: alert,
      })
    );
  };

  // Adjusting textarea height to content
  const textareaCallback = useCallback((itemNameRef) => {
    if (itemNameRef) {
      itemNameRef.style.height = itemNameRef.scrollHeight + "px";
    }
  }, []);

  const startEditing = () => {
    toggleEditing(true);
  };

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

  const onTextChange = (event) => {
    const fixHeight = (event) => {
      event.target.style.height = "auto";
      event.target.style.padding = 0;
      event.target.style.height = event.target.scrollHeight + "px";
    };
    switch (event.target.name) {
      case "item_name":
        if (event.target.value === "") {
          setItem({ ...item, name: "" });
        } else {
          setItem({ ...item, name: event.target.value });
        }
        fixHeight(event);
        break;
      case "item_author":
        if (event.target.value === "") {
          setItem({ ...item, author: "" });
        } else {
          setItem({ ...item, author: event.target.value });
        }
        fixHeight(event);
        break;
      case "item_info":
        if (event.target.value === "") {
          setItem({ ...item, info: "" });
        } else {
          setItem({ ...item, info: event.target.value });
        }
        fixHeight(event);
        break;
      default:
        return;
    }
  };

  const saveCard = () => {
    let card;
    if (type === "course") {
      card = {
        courseid: item.courseid,
        name: item.name.trim(),
        image: item.image,
        author: item.author.trim(),
        info: item.info.trim(),
      };
    } else if (type === "book") {
      card = {
        bookid: item.bookid,
        name: item.name.trim(),
        image: item.image,
        author: item.author.trim(),
        info: item.info.trim(),
      };
    }
    if (!card.name) {
      pushNotification("No item name specified", "Error saving item", true);
    } else if (!card.author) {
      pushNotification("Error saving item", "No item author specified", true);
    } else if (!card.info) {
      pushNotification("No item info specified", "Error saving item", true);
    } else if (card.name.length > 200) {
      pushNotification(
        "Error saving item",
        "Name of the item can't be longer than 200 symbols",
        true
      );
    } else if (card.author.length > 100) {
      pushNotification(
        "Error saving item",
        "Authors line can't be longer than 100 symbols",
        true
      );
    } else if (card.info.length > 1000) {
      pushNotification(
        "Error saving item",
        "Item description can't be longer than 1000 symbols",
        true
      );
    } else {
      dispatch(updateCard(card, type));
      setItem(card);
      setBaseItem(card);
      toggleEditing(false);
    }
  };

  const launch = () => {
    dispatch(deleteCard(item, type, history));
  };

  const { open, Confirm } = useConfirm(
    launch,
    "Do you want to delete this item?",
    "The item will be deleted and you won't be able to restore it later",
    "Delete",
    "No, I changed my mind",
    true
  );

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <Container>
          <ControlsContainer>
            <BackControlGroup onClick={() => history.push(`/${type}s/`)}>
              <BackArrow />
              <BackArrowText>Back</BackArrowText>
            </BackControlGroup>
            {admin ? (
              <ItemControlsGroup>
                {isEditing ? (
                  <ControlsText onClick={saveCard}>Save</ControlsText>
                ) : (
                  <ControlsText onClick={startEditing}>Edit</ControlsText>
                )}
                <Confirm>
                  <ControlsText onClick={open}>Delete</ControlsText>
                </Confirm>
              </ItemControlsGroup>
            ) : (
              <ItemControlsGroup />
            )}
          </ControlsContainer>
          <ItemPageContainer>
            <PhotoGroupContainer>
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
              <IconsContainer>
                <IconGroup>
                  <LikeIcon />
                  <IconCounter>{reactions.likes.count}</IconCounter>
                </IconGroup>
                <IconGroup>
                  <BookmarkIcon />
                  <IconCounter>{reactions.stored.count}</IconCounter>
                </IconGroup>
                <IconGroup>
                  <DislikeIcon />
                  <IconCounter>{reactions.dislikes.count}</IconCounter>
                </IconGroup>
              </IconsContainer>
            </PhotoGroupContainer>
            {isEditing ? (
              <TextContainer>
                <ItemNameEditing
                  name={"item_name"}
                  type={"text"}
                  rows={"1"}
                  value={item.name}
                  placeholder={baseItem.name}
                  onChange={(e) => onTextChange(e)}
                  ref={textareaCallback}
                />
                <ItemAuthorEditing
                  name={"item_author"}
                  type={"text"}
                  rows={"1"}
                  value={item.author}
                  placeholder={baseItem.author}
                  onChange={onTextChange}
                  ref={textareaCallback}
                />
                <ItemInfoEditing
                  name={"item_info"}
                  type={"text"}
                  rows={"1"}
                  value={item.info}
                  placeholder={baseItem.info}
                  onChange={onTextChange}
                  ref={textareaCallback}
                />
              </TextContainer>
            ) : (
              <TextContainer>
                <ItemName>{item.name}</ItemName>
                <ItemAuthor>{item.author}</ItemAuthor>
                <ItemInfo>{item.info}</ItemInfo>
              </TextContainer>
            )}
          </ItemPageContainer>
        </Container>
      )}
    </>
  );
};

export default ItemPage;
