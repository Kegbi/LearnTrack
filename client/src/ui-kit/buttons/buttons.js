import styled from "styled-components";
import { controllers_text, green, grey, red } from "../../global.styles";

const CleanDialogButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  font-weight: normal;
  outline: none;
`;

export const TextBtn = styled(CleanDialogButton)`
  font-size: 2rem;
  font-weight: 500;
  margin-left: ${(p) => (p.ml ? p.ml : 25)}px;
  color: ${controllers_text};
  cursor: pointer;
`;

export const AcceptButton = styled(CleanDialogButton)`
  font-size: 1rem;
  background-color: ${(p) =>
    p.alert ? p.theme.colors.error.main : p.theme.colors.success};
  color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.spacing.xs};
  min-width: 150px;
  border-radius: ${(p) => p.theme.radius.md};
  margin-bottom: 5px;
`;

export const DeclineButton = styled(CleanDialogButton)`
  color: ${(p) => p.theme.colors.grey[600]};
  font-size: 0.8rem;
`;
