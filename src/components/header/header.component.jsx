import React from "react";
import {
  HeaderContainer,
  HeaderSearch,
  Logo,
  ProfileContainer,
  ProfilePicture,
} from "./header.styles";

const Header = ({ user }) => {
  if (user) {
    return (
      <HeaderContainer user={user}>
        <Logo>
          <h1>Logo</h1>
        </Logo>
        <HeaderSearch placeholder={"Search your materials..."} />
        <ProfileContainer>
          <h1>{user.name}</h1>
          <ProfilePicture />
        </ProfileContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <Logo>
          <h1>Logo</h1>
        </Logo>
      </HeaderContainer>
    );
  }
};

export default Header;
