import styled, { css } from "styled-components";
import { buttonTypeConstants } from "../../constants/buttonTypeConstants";

const normalButtonStyles = css`
  border: 1px solid
    ${(p) => (p.borderColor ? p.theme.colors[p.borderColor] : "transparent")};
  font-weight: bold;
  font-size: ${(p) => (p.fz ? p.fz : "1.1rem")};
  transition: 0.3s background-color, 0.3s color;
  border-radius: ${(p) => (p.radius ? p.theme.radius.md : "unset")};
`;

const textButtonStyles = css`
  background-color: transparent;
  color: ${(p) => p.theme.colors.grey[700]};
  border: none;
  transition: 0.3s color;
  font-size: ${(p) => (p.fz ? p.fz : "0.9rem")};
  margin-top: ${(p) => p.theme.spacing.xxs};

  &:hover {
    color: ${(p) => p.theme.colors.black};
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

export const CustomButtons = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: ${(p) => p.theme.spacing.xs} 0;
  cursor: pointer;
  outline: none;
  margin-bottom: ${(p) => (p.mb ? `${p.mb}px` : 0)};

  ${getStyles}
`;

export const ButtonsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(p) => (p.marginTop ? p.theme.spacing[p.marginTop] : 0)};
`;
