import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestStart } from "../../redux/cards/cards.actions";
import { selectCards } from "../../redux/cards/cards.selectors";

import ContentList from "../../components/content-list/content-list";

import styled from "styled-components";

const MainPageContainer = styled.div`
  display: flex;
  margin-top: ${(p) => p.theme.spacing.md};
  width: 100%;
  height: 100%;
`;

const MainPageContent = styled.div`
  width: 100%;
`;

const MainPageGreeting = styled.h1`
  font-size: 2.3rem;
`;

const MainPage = ({ user }) => {
  const dispatch = useDispatch();
  const isPending = useSelector((state) => state.cards.isPending);
  const cardsContent = useSelector(selectCards);

  useEffect(() => {
    dispatch(fetchLatestStart());
  }, []);

  return (
    <MainPageContainer>
      <MainPageContent>
        <MainPageGreeting>Welcome, {user.name}</MainPageGreeting>
        <ContentList
          typeOfContent={"books"}
          content={cardsContent.books}
          isPending={isPending}
          recent={true}
        />
        <ContentList
          typeOfContent={"courses"}
          content={cardsContent.courses}
          isPending={isPending}
          recent={true}
        />
      </MainPageContent>
    </MainPageContainer>
  );
};

export default MainPage;
