import styled from "styled-components";

import { Link } from "react-router-dom";

export const A = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: color 0.1s;
  display: inline-block;
  color: ${(p) =>
    p.color ? p.theme.colors[p.color] : p.theme.colors.text.secondary};
  font-weight: ${(p) =>
    p.weight ? p.theme.font.weight[p.weight] : p.theme.font.weight.normal};
  font-size: ${(p) =>
    p.size ? p.theme.font.size[p.size] : p.theme.font.size.xs};

  &:hover {
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

/**
 * Component for wrapping error messages
 */
export const Error = styled.div`
  color: ${(p) =>
    p.color ? p.theme.colors[p.color] : p.theme.colors.error.main};
  font-size: ${(p) =>
    p.size ? p.theme.font.size[p.size] : p.theme.font.size.sm};
`;
