import styled from "styled-components";

export const ContentListCardContainer = styled.div`
  width: 230px;
  background-color: rgba(196, 196, 196, 0.2);
`;

export const ContentListCardLink = styled.div`
  cursor: pointer;
`;

export const ContainerListCardPhoto = styled.img`
  width: 100%;
  height: 190px;
`;

export const ContainerListCardPhotoContainer = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ContainerListCardText = styled.div`
  margin: 0 10px;
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
  margin-top: 3px;
  font-size: 1.2rem;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
