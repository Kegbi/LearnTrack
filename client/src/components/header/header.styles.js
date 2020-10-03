import styled from "styled-components";
import { grey, grey_dark } from "../../global.styles";

export const HeaderContainer = styled.header`
  width: 100%;
  //display: flex;
  justify-content: ${(props) => (props.user ? "space-between" : "center")};
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px 0;
  //justify-content: space-between;
`;

export const Logo = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const HeaderSearch = styled.input`
  margin: 0 auto;
  width: 60%;
  height: 80%;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${grey};
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${grey_dark};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
`;
