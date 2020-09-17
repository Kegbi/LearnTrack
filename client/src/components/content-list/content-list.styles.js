import styled from "styled-components";
import { grey_dark } from "../../global.styles";

export const ContentListContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const ContentListCards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
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
