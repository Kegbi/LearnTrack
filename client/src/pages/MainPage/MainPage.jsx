import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestStart } from "../../redux/cards/cards.actions";
import { selectLatestContent } from "../../redux/cards/cards.selectors";

import {
  MainPageContainer,
  MainPageContent,
  MainPageGreeting,
} from "./MainPage.styles";

import ContentBlock from "../../containers/content-list/content-block.container";

const MainPage = ({ user }) => {
  const dispatch = useDispatch();
  const isPending = useSelector((state) => state.latest.isPending);
  const latestContent = useSelector(selectLatestContent);

  useEffect(() => {
    dispatch(fetchLatestStart());
  }, []);

  return (
    <MainPageContainer>
      <MainPageContent>
        <MainPageGreeting>Welcome, {user.name}</MainPageGreeting>
        <ContentBlock
          typeOfContent={"Books"}
          content={latestContent.books}
          isPending={isPending}
        />
        <ContentBlock
          typeOfContent={"Courses"}
          content={latestContent.courses}
          isPending={isPending}
        />
      </MainPageContent>
    </MainPageContainer>
  );
};

export default MainPage;
