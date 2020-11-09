import React, { useEffect } from "react";
import {
  MainPageContainer,
  MainPageContent,
  MainPageGreeting,
} from "./MainPage.styles";
import ContentBlock from "../../containers/content-list/content-block.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestStart } from "../../redux/latest/latest.actions";
import { selectLatestContent } from "../../redux/latest/latest.selectors";

const MainPage = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestStart());
  }, []);
  const latestContent = useSelector(selectLatestContent);
  const isPending = useSelector((state) => state.latest.isPending);
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
