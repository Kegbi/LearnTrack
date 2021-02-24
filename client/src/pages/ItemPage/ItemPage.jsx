import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiConstants } from "../../constants/urlConstants";
import { getData } from "../../api/api";
import { addNotification } from "../../redux/notifications/notifications.actions";
import { deleteCard, updateCard } from "../../redux/cards/cards.actions";

import Loader from "../../components/loader/loader";
import ItemPageTextInfo from "./item-page-text-info";

import styled from "styled-components";
import ItemPagePhotoBlock from "./item-page-photo";
import ItemPageControls from "./item-page-controls";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: ${(p) => p.theme.spacing.md};
`;

const ItemPage = ({ type, admin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [item, setItem] = useState({});
  const [reactions, setReactions] = useState({});
  const [baseItem, setBaseItem] = useState({});
  const [isPending, togglePending] = useState(true);
  const [isEditing, toggleEditing] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    let ignoreResponse = false;

    let link;
    if (type === "course") {
      link = apiConstants.courses;
    } else if (type === "book") {
      link = apiConstants.books;
    }
    const fetchData = async () => {
      try {
        const resp = await getData(`${link}/${id}`);
        if (resp.success === true && ignoreResponse === false) {
          setItem(resp.data.info[0]);
          setReactions({
            likes: resp.data.likes[0],
            stored: resp.data.stored[0],
            dislikes: resp.data.dislikes[0],
          });
          setBaseItem(resp.data.info[0]);
        } else {
          history.push("/404");
        }
      } catch {
        pushNotification("Error fetching data", "Data wasn't fetched", true);
      }
      togglePending(false);
    };

    fetchData();

    return () => {
      ignoreResponse = true;
    };
  }, [type, id]);

  const pushNotification = (title, message, alert) => {
    dispatch(
      addNotification({
        title: title,
        message: message,
        alert: alert,
      })
    );
  };

  const startEditing = () => {
    toggleEditing(true);
  };

  const cancelEditing = () => {
    setItem(baseItem);
    toggleEditing(false);
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

  const deleteAction = () => {
    dispatch(deleteCard(item, type, history));
  };

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <Container>
          <ItemPageControls
            admin={admin}
            isEditing={isEditing}
            saveCard={saveCard}
            cancelEditing={cancelEditing}
            startEditing={startEditing}
            deleteAction={deleteAction}
            type={type}
          />
          <Wrapper>
            <ItemPagePhotoBlock
              isEditing={isEditing}
              item={item}
              setItem={setItem}
              pushNotification={pushNotification}
              reactions={reactions}
            />
            <ItemPageTextInfo
              isEditing={isEditing}
              baseItem={baseItem}
              setItem={setItem}
              item={item}
            />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default ItemPage;
