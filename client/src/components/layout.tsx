import styled from "styled-components";

/**
 * Adds margins to UI, using theme spacing options
 */
type SpacingType = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  inline?: boolean;
  hideOnSm?: boolean;
};

export const Spacing = styled.div<SpacingType>`
  ${(p) => p.top && `margin-top: ${p.theme.spacing[p.top]}`};
  ${(p) => p.right && `margin-right: ${p.theme.spacing[p.right]}`};
  ${(p) => p.bottom && `margin-bottom: ${p.theme.spacing[p.bottom]}`};
  ${(p) => p.left && `margin-left: ${p.theme.spacing[p.left]}`};
  ${(p) => p.inline && `display: inline-block;`};

  @media (max-width: ${(p) => p.theme.screen.sm}) {
    ${(p) =>
      p.hideOnSm &&
      `
      display: none;
    `}
  }
`;

/**
 * Overlay, on top of the whole UI
 */
type OverlayType = {
  transparency?: string;
};

export const Overlay = styled.div<OverlayType>`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndex.md};
  background-color: rgba(
    0,
    0,
    0,
    ${(p) => (p.transparency ? p.transparency : "0.25")}
  );
`;
