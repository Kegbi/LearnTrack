import React from "react";
import {
  HeaderContainer,
  ProfileContainer,
  ProfilePicture,
} from "./header.styles";

const Header = ({ user }) => {
  if (user) {
    return (
      <HeaderContainer>
        <h1>Logo</h1>
        <h1>SearchBar</h1>
        <ProfileContainer>
          <h1>{user.name}</h1>
          <ProfilePicture />
        </ProfileContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <h1>Logo</h1>
      </HeaderContainer>
    );
  }
};

export default Header;
