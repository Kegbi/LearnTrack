import styled from "styled-components";

import { card_bg, controllers_text } from "../../global.styles";

import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
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

export const PhotoBlockContainer = styled.div`
  width: 570px;
  margin-right: 115px;
  background-color: ${card_bg};
`;
