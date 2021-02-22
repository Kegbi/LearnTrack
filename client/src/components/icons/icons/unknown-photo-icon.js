import styled from "styled-components";
import { PhotoCamera } from "@styled-icons/material";

export const UnknownPhotoIcon = styled(PhotoCamera)`
  width: 50%;
  height: 50%;
  color: ${(p) => p.theme.colors.grey[400]};
`;
