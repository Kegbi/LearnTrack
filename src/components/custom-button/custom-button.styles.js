import styled, { css } from "styled-components";

const normalButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s all;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    background-color: black;
    color: white;
    border-color: transparent;
  }
`;

const textButtonStyle = css`
  background-color: transparent;
  color: #343434;
  border: none;
  transition: 0.3s color;
  font-size: 0.9rem;
  margin-top: 5px;

  &:hover {
    color: black;
  }
`;

const getStyles = (props) => {
  if (props.textButton) {
    return textButtonStyle;
  } else {
    return normalButtonStyle;
  }
};

export const CustomButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 10px 0;
  cursor: pointer;
  outline: none;
  margin-top: 10px;

  ${getStyles}
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
