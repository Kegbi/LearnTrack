import React from "react";
import {
  BookmarkIcon,
  ContainerListCardAuthor,
  ContainerListCardIconCounter,
  ContainerListCardIconGroup,
  ContainerListCardIcons,
  ContainerListCardName,
  ContainerListCardPhoto,
  ContentListCardBottom,
  ContentListCardContainer,
  DislikeIcon,
  LikeIcon,
} from "./content-list-card.styles";

const ContentListCard = ({ name, author }) => {
  return (
    <ContentListCardContainer>
      <ContainerListCardPhoto />
      <ContentListCardBottom>
        <ContainerListCardName>{name}</ContainerListCardName>
        <ContainerListCardAuthor>{author}</ContainerListCardAuthor>
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
