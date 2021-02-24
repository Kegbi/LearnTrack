import React from "react";

import { LikeIcon, DislikeIcon, BookmarkIcon } from "./icons";
import styled from "styled-components";

const IconsContainer = styled.div`
  margin: ${(p) => (p.big ? "15px 0" : "10px 0")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconCounter = styled.div`
  margin-top: ${(props) => (props.big ? "10px" : 0)};
  font-size: ${(props) => (props.big ? "1.5rem" : "1rem")};
  color: #393939;
`;

const IconsBlock = ({ counters, big, reactions }) => {
  return (
    <IconsContainer big={big}>
      <IconGroup>
        <LikeIcon big={big} />
        {counters ? (
          <IconCounter big={big}>{reactions.likes.count}</IconCounter>
        ) : null}
      </IconGroup>
      <IconGroup>
        <BookmarkIcon big={big} />
        {counters ? (
          <IconCounter big={big}>{reactions.stored.count}</IconCounter>
        ) : null}
      </IconGroup>
      <IconGroup>
        <DislikeIcon big={big} />
        {counters ? (
          <IconCounter big={big}>{reactions.dislikes.count}</IconCounter>
        ) : null}
      </IconGroup>
    </IconsContainer>
  );
};

export default IconsBlock;
