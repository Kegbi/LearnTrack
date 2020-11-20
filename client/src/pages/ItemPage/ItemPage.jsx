import React, { useEffect, useState } from "react";
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
} from "./ItemPage.styles";
import Loader from "../../components/loader/loader.component";

const ItemPage = ({ type, id }) => {
  const [item, setItem] = useState({});
  const [isPending, togglePending] = useState(true);
  useEffect(() => {
    let link;
    if (type === "course") {
      link = urlConstants.courses;
    } else if (type === "book") {
      link = urlConstants.books;
    }
    const fetchData = async () => {
      const resp = await getData(`${link}/${id}`);
      await setItem(resp);
      await togglePending(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <ItemPageContainer>
          <PhotoGroupContainer>
            <PhotoContainer>
              {item.info[0].image.length ? <Photo /> : <UnknownPhoto />}
            </PhotoContainer>
            <IconsContainer>
              <IconGroup>
                <LikeIcon />
                <IconCounter>{item.likes[0].count}</IconCounter>
              </IconGroup>
              <IconGroup>
                <BookmarkIcon />
                <IconCounter>{item.stored[0].count}</IconCounter>
              </IconGroup>
              <IconGroup>
                <DislikeIcon />
                <IconCounter>{item.dislikes[0].count}</IconCounter>
              </IconGroup>
            </IconsContainer>
          </PhotoGroupContainer>
          <TextContainer>
            <ItemName>{item.info[0].name}</ItemName>
            <ItemAuthor>{item.info[0].author}</ItemAuthor>
            <ItemInfo>{item.info[0].info}</ItemInfo>
          </TextContainer>
        </ItemPageContainer>
      )}
    </>
  );
};

export default ItemPage;
