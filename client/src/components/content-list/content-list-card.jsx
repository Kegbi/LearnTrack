import React from "react";
import { useHistory } from "react-router-dom";

import IconsBlock from "../../ui-kit/icons/icons-block";

import { apiConstants } from "../../constants/urlConstants";

import { UnknownPhotoIcon } from "../icons";
import { Spacing } from "../layout";

import styled from "styled-components";

const Container = styled.div`
  width: 230px;
  background-color: rgba(196, 196, 196, 0.2);
`;

const PointerWrapper = styled.div`
  cursor: pointer;
`;

const Photo = styled.img`
  width: 100%;
  height: 190px;
`;

const PhotoContainer = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.spacing.xs};
`;

const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Author = styled(Name)`
  margin-top: 3px;
`;

const ContentListCard = ({ _id, name, image, author, type }) => {
  let history = useHistory();

  return (
    <Container>
      <PointerWrapper onClick={() => history.push(`/${type}/${_id}`)}>
        <PhotoContainer>
          {image.length ? (
            <Photo src={`${apiConstants.images}/${image}`} alt={"card-photo"} />
          ) : (
            <UnknownPhotoIcon />
          )}
        </PhotoContainer>
        <Spacing left={"xs"} right={"xs"}>
          <Name>{name}</Name>
          <Author>{author}</Author>
        </Spacing>
      </PointerWrapper>
      <Spacing left={"xs"} right={"xs"}>
        <IconsBlock counters={false} big={false} reactions={null} />
      </Spacing>
    </Container>
  );
};

export default ContentListCard;
