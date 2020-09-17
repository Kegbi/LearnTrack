import React from "react";
import { MainPageContainer, MainPageContent } from "./MainPage.styles";
import ContentBlock from "../../containers/content-list/content-block.container";

const MainPage = ({ user }) => {
  return (
    <MainPageContainer>
      <MainPageContent>
        <h1>Welcome, {user.name}</h1>
        <ContentBlock typeOfContent={"Books"} />
        <ContentBlock typeOfContent={"Courses"} />
      </MainPageContent>
    </MainPageContainer>
  );
};

export default MainPage;
