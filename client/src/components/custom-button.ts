import styled, { css } from "styled-components";
import { buttonTypeConstants } from "../constants/buttonTypeConstants";

type NormalButtonStylesTypes = {
  w?: string;
  borderColor?: string;
  fw?: string;
  fz?: string;
  br?: string;
};

const normalButtonStyles = css<NormalButtonStylesTypes>`
  width: ${(p) => (p.w ? p.w : "150px")};
  border: 1px solid
    ${(p) => (p.borderColor ? p.theme.colors[p.borderColor] : "transparent")};
  font-weight: ${(p) =>
    p.fw ? p.theme.font.weight[p.fw] : p.theme.font.weight["bold"]};
  font-size: ${(p) => (p.fz ? p.fz : "1.1rem")};
  transition: 0.3s background-color, 0.3s color;
  border-radius: ${(p) => (p.br ? p.theme.radius.md : "unset")};
`;

type TextButtonStylesTypes = {
  fz?: string;
  fw?: string;
};

const textButtonStyles = css<TextButtonStylesTypes>`
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

type GetStylesPropsType = {
  textButton?: string | boolean;
  type?: "confirm" | "alert" | "text";
};

const getStyles = (p: GetStylesPropsType) => {
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

type CustomButtonType = {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  fz?: string;
  fw?: string;
  w?: string;
  borderColor?: string;
  br?: string;
  textButton?: boolean | string;
  type?: "confirm" | "alert" | "text";
};

export const CustomButton = styled.button<CustomButtonType>`
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

type ButtonsColumnContainerType = {
  mt?: string;
};

export const ButtonsColumnContainer = styled.div<ButtonsColumnContainerType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(p) => (p.mt ? p.theme.spacing[p.mt] : 0)};
`;
