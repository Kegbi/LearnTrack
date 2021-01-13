import styled from "styled-components";
import { black } from "../../global.styles";

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding-right: 50px;
  color: ${black};
`;

const StandardTextarea = styled.textarea`
  font-family: "Roboto", "Segoe UI", "Ubuntu", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid black;
  overflow: hidden;
  resize: none;
  width: 100%;
  transition: height 0.2s;
  margin: 0;
  padding: 0;
`;

export const ItemName = styled.h1`
  font-size: 3rem;
  margin-bottom: 25px;
`;

export const ItemNameEditing = styled(StandardTextarea)`
  font-size: 3rem;
  margin-bottom: 25px;
  font-weight: 600;
`;

export const ItemAuthor = styled.h2`
  font-size: 2.35rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ItemAuthorEditing = styled(StandardTextarea)`
  font-size: 2.35rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ItemInfo = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const ItemInfoEditing = styled(StandardTextarea)`
  font-size: 1.8rem;
  font-weight: 400;
`;
