import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlConstants } from "../../constants/urlConstants";
import { getData } from "../../api/api";
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
        likes: resp.likes,
        stored: resp.stored,
        dislikes: resp.dislikes,
      });
      await setBaseItem(resp.info[0]);
      await togglePending(false);
    };
    fetchData();
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

  const onTextChange = (event) => {
    switch (event.target.name) {
      case "item_name":
        if (event.target.value === "") {
          setItem({ ...item, name: "" });
        } else {
          setItem({ ...item, name: event.target.value });
        }
        break;
      case "item_author":
        if (event.target.value === "") {
          setItem({ ...item, author: "" });
        } else {
          setItem({ ...item, author: event.target.value });
        }
        break;
      case "item_info":
        if (event.target.value === "") {
          setItem({ ...item, info: "" });
        } else {
          setItem({ ...item, info: event.target.value });
        }
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
        name: item.name,
        image: item.image,
        author: item.author,
        info: item.info,
      };
    } else if (type === "book") {
      card = {
        bookid: item.bookid,
        name: item.name,
        image: item.image,
        author: item.author,
        info: item.info,
      };
    }
    if (!card.name || !card.author || !card.info) {
      console.log("Can't do this");
    } else {
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
                <ControlsText>Delete</ControlsText>
              </ItemControlsGroup>
            ) : (
              <ItemControlsGroup />
            )}
          </ControlsContainer>
          <ItemPageContainer>
            <PhotoGroupContainer>
              <PhotoContainer>
                {item.image.length ? <Photo /> : <UnknownPhoto />}
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
                  value={item.name}
                  placeholder={baseItem.name}
                  onChange={onTextChange}
                />
                <ItemAuthorEditing
                  name={"item_author"}
                  type={"text"}
                  value={item.author}
                  placeholder={baseItem.author}
                  onChange={onTextChange}
                />
                <ItemInfoEditing
                  name={"item_info"}
                  type={"text"}
                  value={item.info}
                  placeholder={baseItem.info}
                  onChange={onTextChange}
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
