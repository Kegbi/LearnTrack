import React from "react";
import {
  BookmarkIcon,
  ContainerListCardAuthor,
  ContainerListCardIconCounter,
  ContainerListCardIconGroup,
  ContainerListCardIcons,
  ContainerListCardName,
  ContainerListCardPhoto,
  ContainerListCardPhotoContainer,
  ContentListCardBottom,
  ContentListCardContainer,
  ContentListCardLink,
  DislikeIcon,
  LikeIcon,
  UnknownPhoto,
} from "./content-list-card.styles";
import { useHistory } from "react-router-dom";

const ContentListCard = ({ _id, image, name, author, type }) => {
  let history = useHistory();

  return (
    <ContentListCardContainer>
      <ContentListCardLink onClick={() => history.push(`/${type}/${_id}`)}>
        <ContainerListCardPhotoContainer>
          {image.length ? (
            <ContainerListCardPhoto
              src={`../../../uploads/images/${image}`}
              alt={"card-photo"}
            />
          ) : (
            <UnknownPhoto />
          )}
        </ContainerListCardPhotoContainer>
        <ContainerListCardName>{name}</ContainerListCardName>
        <ContainerListCardAuthor>{author}</ContainerListCardAuthor>
      </ContentListCardLink>
      <ContentListCardBottom>
        <ContainerListCardIcons>
          <ContainerListCardIconGroup>
            <LikeIcon />
            <ContainerListCardIconCounter>222</ContainerListCardIconCounter>
          </ContainerListCardIconGroup>
          <ContainerListCardIconGroup>
            <BookmarkIcon />
            <ContainerListCardIconCounter>222</ContainerListCardIconCounter>
          </ContainerListCardIconGroup>
          <ContainerListCardIconGroup>
            <DislikeIcon />
            <ContainerListCardIconCounter>222</ContainerListCardIconCounter>
          </ContainerListCardIconGroup>
        </ContainerListCardIcons>
      </ContentListCardBottom>
    </ContentListCardContainer>
  );
};

export default ContentListCard;
