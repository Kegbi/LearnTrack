import React, { useCallback } from "react";
import {
  ItemAuthor,
  ItemAuthorEditing,
  ItemInfo,
  ItemInfoEditing,
  ItemName,
  ItemNameEditing,
  TextContainer,
} from "./item-page-text-info.styles";

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
