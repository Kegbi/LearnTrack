import styled, { css } from "styled-components";
import { buttonTypeConstants } from "../constants/buttonTypeConstants";

const normalButtonStyles = css`
  width: ${(p) => (p.w ? p.w : "150px")};
  border: 1px solid
    ${(p) => (p.borderColor ? p.theme.colors[p.borderColor] : "transparent")};
  font-weight: ${(p) =>
    p.fw ? p.theme.font.weight[p.fw] : p.theme.font.weight["bold"]};
  font-size: ${(p) => (p.fz ? p.fz : "1.1rem")};
  transition: 0.3s background-color, 0.3s color;
  border-radius: ${(p) => (p.br ? p.theme.radius.md : "unset")};
`;

const textButtonStyles = css`
  background-color: transparent;
  color: ${(p) => p.theme.colors.grey[600]};
  border: none;
  transition: 0.3s color;
  font-size: ${(p) => (p.fz ? p.fz : "0.9rem")};
  font-weight: ${(p) =>
    p.fw ? p.theme.font.weight[p.fw] : p.theme.font.weight["normal"]};
  padding: 0;

  &:hover {
    color: ${(p) => p.theme.colors.grey[800]};
  }
`;

const confirmButtonStyles = css`
  ${normalButtonStyles};
  background-color: ${(p) => p.theme.colors.success};
  color: ${(p) => p.theme.colors.white};

  &:hover {
    background-color: ${(p) => p.theme.colors.success_light};
  }
`;

const alertButtonStyles = css`
  ${normalButtonStyles};
  background-color: ${(p) => p.theme.colors.error.main};
  color: ${(p) => p.theme.colors.white};

  &:hover {
    background-color: ${(p) => p.theme.colors.error.dark};
  }
`;

const getStyles = (p) => {
  if (p.textButton) {
    return textButtonStyles;
  } else if (p.type === buttonTypeConstants.confirm) {
    return confirmButtonStyles;
  } else if (p.type === buttonTypeConstants.alert) {
    return alertButtonStyles;
  } else {
    return confirmButtonStyles;
  }
};

export const CustomButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.spacing.xs} 0;
  cursor: pointer;
  outline: none;
  margin-top: ${(p) => (p.mt ? p.theme.spacing[p.mt] : 0)};
  margin-right: ${(p) => (p.mr ? p.theme.spacing[p.mr] : 0)};
  margin-bottom: ${(p) => (p.mb ? p.theme.spacing[p.mb] : 0)};
  margin-left: ${(p) => (p.ml ? p.theme.spacing[p.ml] : 0)};

  ${getStyles}
`;

export const ButtonsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(p) => (p.marginTop ? p.theme.spacing[p.marginTop] : 0)};
`;
