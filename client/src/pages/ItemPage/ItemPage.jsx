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
      await setItem(resp[0]);
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
              {item.image.length ? <Photo /> : <UnknownPhoto />}
            </PhotoContainer>
            <IconsContainer>
              <IconGroup>
                <LikeIcon />
                <IconCounter>222</IconCounter>
              </IconGroup>
              <IconGroup>
                <BookmarkIcon />
                <IconCounter>222</IconCounter>
              </IconGroup>
              <IconGroup>
                <DislikeIcon />
                <IconCounter>222</IconCounter>
              </IconGroup>
            </IconsContainer>
          </PhotoGroupContainer>
          <TextContainer>
            <ItemName>{item.name}</ItemName>
            <ItemAuthor>{item.author}</ItemAuthor>
            <ItemInfo>{item.info}</ItemInfo>
          </TextContainer>
        </ItemPageContainer>
      )}
    </>
  );
};

export default ItemPage;
