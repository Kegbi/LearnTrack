import React from "react";
import { useHistory } from "react-router-dom";
import {
  BookmarkIcon,
  ContainerListCardAuthor,
  ContainerListCardIconCounter,
  ContainerListCardIconGroup,
  ContainerListCardIcons,
  ContainerListCardName,
  ContainerListCardPhoto,
  ContainerListCardPhotoContainer,
  ContainerListCardText,
  ContentListCardBottom,
  ContentListCardContainer,
  ContentListCardLink,
  DislikeIcon,
  LikeIcon,
  UnknownPhoto,
} from "./content-list-card.styles";
import { urlConstants } from "../../constants/urlConstants";

const ContentListCard = ({ _id, name, image, author, type }) => {
  let history = useHistory();

  return (
    <ContentListCardContainer>
      <ContentListCardLink onClick={() => history.push(`/${type}/${_id}`)}>
        <ContainerListCardPhotoContainer>
          {image.length ? (
            <ContainerListCardPhoto
              src={`${urlConstants.images}/${image}`}
              alt={"card-photo"}
            />
          ) : (
            <UnknownPhoto />
          )}
        </ContainerListCardPhotoContainer>
        <ContainerListCardText>
          <ContainerListCardName>{name}</ContainerListCardName>
          <ContainerListCardAuthor>{author}</ContainerListCardAuthor>
        </ContainerListCardText>
      </ContentListCardLink>
      <ContentListCardBottom>
        <ContainerListCardIcons>
          <ContainerListCardIconGroup>
            <LikeIcon />
            {/*<ContainerListCardIconCounter>222</ContainerListCardIconCounter>*/}
          </ContainerListCardIconGroup>
          <ContainerListCardIconGroup>
            <BookmarkIcon />
            {/*<ContainerListCardIconCounter>222</ContainerListCardIconCounter>*/}
          </ContainerListCardIconGroup>
          <ContainerListCardIconGroup>
            <DislikeIcon />
            {/*<ContainerListCardIconCounter>222</ContainerListCardIconCounter>*/}
          </ContainerListCardIconGroup>
        </ContainerListCardIcons>
      </ContentListCardBottom>
    </ContentListCardContainer>
  );
};

export default ContentListCard;
