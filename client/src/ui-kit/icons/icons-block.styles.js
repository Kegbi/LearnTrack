import styled from "styled-components";
import { BookBookmark, Dislike, Like } from "styled-icons/boxicons-regular";
import { green, grey, red, yellow } from "../../global.styles";

export const IconsContainer = styled.div`
  margin: ${(props) => (props.big ? "15px 0" : "10px 0")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconCounter = styled.div`
  margin-top: ${(props) => (props.big ? "10px" : 0)};
  font-size: ${(props) => (props.big ? "1.5rem" : "1rem")};
  color: #393939;
`;

export const LikeIcon = styled(Like)`
  height: ${(props) => (props.big ? "55px" : "22px")};
  color: ${(props) => (props.active ? green : grey)};
`;

export const DislikeIcon = styled(Dislike)`
  height: ${(props) => (props.big ? "55px" : "22px")};
  color: ${(props) => (props.active ? red : grey)};
`;

export const BookmarkIcon = styled(BookBookmark)`
  height: ${(props) => (props.big ? "55px" : "22px")};
  color: ${(props) => (props.active ? yellow : grey)};
`;
