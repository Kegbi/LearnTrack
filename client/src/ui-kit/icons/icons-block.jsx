import React from "react";

import {
  BookmarkIcon,
  DislikeIcon,
  IconCounter,
  IconGroup,
  IconsContainer,
  LikeIcon,
} from "./icons-block.styles";

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
