import styled from "styled-components";
import { Dislike } from "styled-icons/boxicons-regular";

type DislikeIconType = {
  big: boolean;
  active: boolean;
};

export const DislikeIcon = styled(Dislike)<DislikeIconType>`
  height: ${(p) => (p.big ? "55px" : "22px")};
  color: ${(p) =>
    p.active ? p.theme.colors.error.main : p.theme.colors.grey[600]};
`;
