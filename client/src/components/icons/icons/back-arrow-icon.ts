import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const BackArrow = styled(ArrowBack)`
  height: 25px;
  color: ${(p) => p.theme.colors.grey[600]};
`;
