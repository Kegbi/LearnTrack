import React, { useCallback } from "react";

import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding-right: 50px;
  color: ${(p) => p.theme.colors.black};
`;

const StandardTextarea = styled.textarea`
  font-family: "Roboto", "Segoe UI", "Ubuntu", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid black;
  overflow: hidden;
  resize: none;
  width: 100%;
  transition: height 0.2s;
  margin: 0;
  padding: 0;
`;

export const ItemName = styled.h1`
  font-size: 3rem;
  margin-bottom: 25px;
`;

export const ItemNameEditing = styled(StandardTextarea)`
  font-size: 3rem;
  margin-bottom: 25px;
  font-weight: 600;
`;

export const ItemAuthor = styled.h2`
  font-size: 2.35rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ItemAuthorEditing = styled(StandardTextarea)`
  font-size: 2.35rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ItemInfo = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const ItemInfoEditing = styled(StandardTextarea)`
  font-size: 1.8rem;
  font-weight: 400;
`;

const ItemPageTextInfo = ({ isEditing, baseItem, setItem, item }) => {
  // Adjusting textarea height to content
  const textareaCallback = useCallback((itemNameRef) => {
    if (itemNameRef) {
      itemNameRef.style.height = itemNameRef.scrollHeight + "px";
    }
  }, []);

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

  return (
    <>
      {isEditing ? (
        <TextContainer>
          <ItemNameEditing
            name={"item_name"}
            type={"text"}
            rows={"1"}
            value={item.name}
            placeholder={baseItem.name}
            onChange={onTextChange}
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
    </>
  );
};

export default ItemPageTextInfo;
