import styled from "styled-components";
import { Like } from "styled-icons/boxicons-regular";

type LikeIconType = {
  big: boolean;
  active: boolean;
}

export const LikeIcon = styled(Like)<LikeIconType>`
  height: ${(p) => (p.big ? "55px" : "22px")};
  color: ${(p) => (p.active ? p.theme.colors.success : p.theme.colors.grey[600])};
`;
