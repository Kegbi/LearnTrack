import React from "react";
import {
  HeaderContainer,
  HeaderSearch,
  Logo,
  ProfileContainer,
  ProfilePicture,
} from "./header.styles";
import { useHistory } from "react-router-dom";

const Header = ({ user }) => {
  let history = useHistory();

  if (user) {
    return (
      <HeaderContainer user={user}>
        <Logo onClick={() => history.push("/")}>
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
