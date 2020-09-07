import styled from "styled-components";
import { BookBookmark } from "styled-icons/boxicons-regular";
import { Like } from "styled-icons/boxicons-regular";
import { Dislike } from "styled-icons/boxicons-regular";
import { green, grey, red, yellow } from "../../global.styles";

export const ContentListCardContainer = styled.div`
  width: 230px;
  height: 300px;
  background-color: rgba(196, 196, 196, 0.2);
`;

export const ContainerListCardPhoto = styled.img`
  width: 100%;
  height: 190px;
`;
export const ContentListCardBottom = styled.div`
  margin: 0 10px;
`;

export const ContainerListCardName = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContainerListCardAuthor = styled.h2`
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContainerListCardIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const ContainerListCardIconGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ContainerListCardIconCounter = styled.div`
  font-size: 1rem;
  text-align: center;
`;

export const LikeIcon = styled(Like)`
  height: 22px;
  color: ${(props) => (props.active ? green : grey)};
`;

export const DislikeIcon = styled(Dislike)`
  height: 22px;
  color: ${(props) => (props.active ? red : grey)};
`;

export const BookmarkIcon = styled(BookBookmark)`
  height: 22px;
  color: ${(props) => (props.active ? yellow : grey)};
`;
