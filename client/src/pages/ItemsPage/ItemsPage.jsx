import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  ItemsPageAddNew,
  ItemsPageControlsGroup,
  ItemsPageTitle,
  ItemsPageTitlesGroup,
} from "./ItemsPage.styles";
import ContentList from "../../components/content-list/content-list.component";
import { useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/cards.selectors";

const ItemsPage = ({ type, admin }) => {
  let history = useHistory();
  const isPending = useSelector((state) => state.cards.isPending);
  const cards = useSelector(selectCards);

  return (
    <Container>
      <ItemsPageControlsGroup>
        {type === "book" ? (
          <ItemsPageTitlesGroup>
            <ItemsPageTitle active={true}>Books</ItemsPageTitle>
            <ItemsPageTitle onClick={() => history.push("/courses")}>
              Courses
            </ItemsPageTitle>
          </ItemsPageTitlesGroup>
        ) : (
          <ItemsPageTitlesGroup>
            <ItemsPageTitle onClick={() => history.push("/books")}>
              Books
            </ItemsPageTitle>
            <ItemsPageTitle active={true}>Courses</ItemsPageTitle>
          </ItemsPageTitlesGroup>
        )}
        {admin ? <ItemsPageAddNew>Add new</ItemsPageAddNew> : null}
      </ItemsPageControlsGroup>
      {/*<ContentList*/}
      {/*  typeOfContent={type}*/}
      {/*  content={}*/}
      {/*  isPending={isPending}*/}
      {/*  recent={false}*/}
      {/*/>*/}
    </Container>
  );
};

export default ItemsPage;
