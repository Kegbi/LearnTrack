import React from "react";
import { useHistory } from "react-router-dom";

import IconsBlock from "../../ui-kit/icons/icons-block";

import {
  ContainerListCardAuthor,
  ContainerListCardName,
  ContainerListCardPhoto,
  ContainerListCardPhotoContainer,
  ContainerListCardText,
  ContentListCardBottom,
  ContentListCardContainer,
  ContentListCardLink,
} from "./content-list-card.styles";
import { UnknownPhoto } from "../../ui-kit/unknown-photo/unknown-photo.styles";

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
        <IconsBlock counters={false} big={false} reactions={null} />
      </ContentListCardBottom>
    </ContentListCardContainer>
  );
};

export default ContentListCard;
