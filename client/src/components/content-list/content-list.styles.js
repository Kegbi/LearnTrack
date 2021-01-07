import styled from "styled-components";
import { grey_dark } from "../../global.styles";

export const ContentListContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const ContentListCards = styled.div`
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  grid-gap: 34px;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 1880px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 1630px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 875px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContentListContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentListHeaderLink = styled.a`
  font-size: 1.3rem;
  color: ${grey_dark};
  cursor: pointer;
`;

export const ContentListNoCards = styled.h2`
  font-size: 1.5rem;
  margin-top: 30px;
`;
