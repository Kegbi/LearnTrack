import styled from "styled-components";
import { black, controllers_text } from "../../global.styles";

export const Container = styled.div`
  margin-top: 25px;
  width: 100%;
`;

export const ItemsPageControlsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemsPageTitlesGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemsPageTitle = styled.button`
  color: ${(props) => (props.active ? black : controllers_text)};
  margin: 0 15px 0 0;
  border: none;
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  outline: none;
`;

export const ItemsPageAddNew = styled.button`
  cursor: pointer;
  color: ${controllers_text};
  border: none;
  padding: 0 10px 0 10px;
  margin: 0;
  text-align: center;
  background-color: transparent;
  font-weight: normal;
  outline: none;
  font-size: 1.3rem;
`;
