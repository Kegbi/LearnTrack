import React from "react";
import { MainPageContainer, MainPageContent, MainPageGreeting } from "./MainPage.styles";
import ContentBlock from "../../containers/content-list/content-block.container";

const MainPage = ({ user }) => {
  return (
    <MainPageContainer>
      <MainPageContent>
        <MainPageGreeting>Welcome, {user.name}</MainPageGreeting>
        <ContentBlock typeOfContent={"Books"} />
        <ContentBlock typeOfContent={"Courses"} />
      </MainPageContent>
    </MainPageContainer>
  );
};

export default MainPage;
