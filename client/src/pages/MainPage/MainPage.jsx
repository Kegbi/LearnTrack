import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestStart } from "../../redux/cards/cards.actions";
import { selectLatestContent } from "../../redux/cards/cards.selectors";

import {
  MainPageContainer,
  MainPageContent,
  MainPageGreeting,
} from "./MainPage.styles";

import ContentList from "../../components/content-list/content-list.component";

const MainPage = ({ user }) => {
  const dispatch = useDispatch();
  const isPending = useSelector((state) => state.cards.isPending);
  const latestContent = useSelector(selectLatestContent);

  useEffect(() => {
    dispatch(fetchLatestStart());
  }, []);

  return (
    <MainPageContainer>
      <MainPageContent>
        <MainPageGreeting>Welcome, {user.name}</MainPageGreeting>
        <ContentList
          typeOfContent={"Books"}
          content={latestContent.books}
          isPending={isPending}
          recent={true}
        />
        <ContentList
          typeOfContent={"Courses"}
          content={latestContent.courses}
          isPending={isPending}
          recent={true}
        />
      </MainPageContent>
    </MainPageContainer>
  );
};

export default MainPage;
