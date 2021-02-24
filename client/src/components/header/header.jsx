import React from "react";
import { useHistory } from "react-router-dom";

import Search from "../search/search";

import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  justify-content: ${(props) => (props.user ? "space-between" : "center")};
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${(p) => p.theme.spacing.sm} 0 0;
`;

const Logo = styled.div`
  width: 100%;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.grey[900]};
  width: 50px;
  height: 50px;
  border-radius: ${(p) => p.theme.radius[50]};
  margin-left: ${(p) => p.theme.spacing.sm};
`;

const Header = ({ location, user }) => {
  let history = useHistory();

  if (user) {
    return (
      <HeaderContainer user={user}>
        <Logo onClick={() => history.push("/")}>
          <h1>Logo</h1>
        </Logo>
        <Search location={location} />
        <ProfileContainer>
          <h1>{user.name}</h1>
          <ProfilePicture />
        </ProfileContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <Logo onClick={() => history.push("/")}>
          <h1>Logo</h1>
        </Logo>
      </HeaderContainer>
    );
  }
};

export default Header;
