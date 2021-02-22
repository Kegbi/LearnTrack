import styled from "styled-components";
import { BookBookmark } from "styled-icons/boxicons-regular";

type BookmarkIconType = {
  big: boolean;
  active: boolean;
};

export const BookmarkIcon = styled(BookBookmark)<BookmarkIconType>`
  height: ${(p) => (p.big ? "55px" : "22px")};
  color: ${(p) =>
    p.active ? p.theme.colors.yellow : p.theme.colors.grey[600]};
`;
