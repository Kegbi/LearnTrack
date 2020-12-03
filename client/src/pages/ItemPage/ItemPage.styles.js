import styled from "styled-components";
import { PhotoCamera } from "@styled-icons/material";
import {
  black,
  card_bg,
  controllers_text,
  green,
  grey,
  grey_light,
  red,
  yellow,
} from "../../global.styles";
import {
  BookBookmark,
  Dislike,
  Like,
  ArrowBack,
} from "styled-icons/boxicons-regular";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 30px;
`;

export const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackControlGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackArrow = styled(ArrowBack)`
  height: 25px;
  color: ${controllers_text};
`;

export const BackArrowText = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-left: 15px;
  color: ${controllers_text};
`;

export const ItemControlsGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ControlsText = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-left: 25px;
  color: ${controllers_text};
  cursor: pointer;
`;

export const PhotoGroupContainer = styled.div`
  width: 570px;
  height: 600px;
  margin-right: 115px;
  background-color: ${card_bg};
`;

export const PhotoContainer = styled.div`
  width: 570px;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.img`
  width: 100%;
  height: 470px;
`;

export const UnknownPhoto = styled(PhotoCamera)`
  width: 50%;
  height: 50%;
  color: ${grey_light};
`;

export const IconsContainer = styled.div`
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
  margin-top: 10px;
  font-size: 1.5rem;
  color: #393939;
`;

export const LikeIcon = styled(Like)`
  height: 55px;
  color: ${(props) => (props.active ? green : grey)};
`;

export const DislikeIcon = styled(Dislike)`
  height: 55px;
  color: ${(props) => (props.active ? red : grey)};
`;

export const BookmarkIcon = styled(BookBookmark)`
  height: 55px;
  color: ${(props) => (props.active ? yellow : grey)};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding-right: 50px;
  color: ${black};
`;

export const ItemName = styled.h1`
  font-size: 3rem;
  margin-bottom: 25px;
`;

export const ItemNameEditing = styled.input`
  font-size: 3rem;
  margin-bottom: 25px;
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
`;

export const ItemAuthor = styled.h2`
  font-size: 2.35rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ItemAuthorEditing = styled.input`
  font-size: 2.35rem;
  font-weight: 400;
  margin-bottom: 50px;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const ItemInfo = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const ItemInfoEditing = styled.input`
  font-size: 1.8rem;
  font-weight: 400;
  border: none;
  background-color: transparent;
  outline: none;
`;
