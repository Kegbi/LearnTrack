import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { urlConstants } from "../../constants/urlConstants";
import { getData } from "../../api/api";
import { addNotification } from "../../redux/notifications/notifications.actions";
import { updateCard } from "../../redux/cards/cards.actions";
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

const ItemPage = ({ type, id, admin }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [item, setItem] = useState({});
  const [reactions, setReactions] = useState({});
  const [baseItem, setBaseItem] = useState({});
  const [isPending, togglePending] = useState(true);
  const [isEditing, toggleEditing] = useState(false);
  const [modalOpened, toggleModal] = useState(false);

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

  const pushNotification = (type, message, title) => {
    dispatch(
      addNotification({
        typeOfItem: type,
        message: message,
        title: title,
      })
    );
  };

  // Adjusting textarea height to content
  const textareaCallback = useCallback((itemNameRef) => {
    if (itemNameRef) {
      itemNameRef.style.height = itemNameRef.scrollHeight + "px";
    }
  }, []);

  const openModal = () => {
    if (modalOpened === false) {
      toggleModal(true);
    } else {
      toggleModal(false);
    }
  };

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
        const { data } = await axios.post(urlConstants.uploadImage, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (data.success) {
          setTimeout(function () {
            setItem({ ...item, image: data.message });
          }, 500);
        } else {
          pushNotification(
            "Error",
            "File wasn't loaded",
            "Error saving your image"
          );
        }
      };
      return sendFiles();
    } catch (err) {
      console.log("Something went wrong with uploading your photo");
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
      pushNotification("Error", "No item name specified", "Error saving item");
    } else if (!card.author) {
      pushNotification(
        "Error",
        "No item author specified",
        "Error saving item"
      );
    } else if (!card.info) {
      pushNotification("Error", "No item info specified", "Error saving item");
    } else if (card.name.length > 200) {
      pushNotification(
        "Error",
        "Name of the item can't be longer than 200 symbols",
        "Error saving item"
      );
    } else if (card.author.length > 100) {
      pushNotification(
        "Error",
        "Authors line can't be longer than 100 symbols"
      );
    } else if (card.info.length > 1000) {
      pushNotification(
        "Error",
        "Item description can't be longer than 1000 symbols"
      );
    } else {
      dispatch(updateCard(card, type));
      setItem(card);
      setBaseItem(card);
      toggleEditing(false);
    }
  };

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
                <ControlsText
                  onClick={() =>
                    pushNotification("Error", "Deleting", "Successful request")
                  }
                >
                  Delete
                </ControlsText>
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
                {item.image.length ? (
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
