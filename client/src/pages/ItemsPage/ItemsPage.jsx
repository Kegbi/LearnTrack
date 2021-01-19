import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/cards.selectors";
import { useHistory } from "react-router-dom";
import {
  fetchFirstBooksStart,
  fetchFirstCoursesStart,
} from "../../redux/cards/cards.actions";

import {
  Container,
  ItemsPageAddNew,
  ItemsPageControlsGroup,
  ItemsPageTitle,
  ItemsPageTitlesGroup,
} from "./ItemsPage.styles";

import ContentList from "../../components/content-list/content-list.component";

const ItemsPage = ({ type, admin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isPending = useSelector((state) => state.cards.isPending);
  const cards = useSelector(selectCards);

  let typeOfContent = type === "book" ? "books" : "courses";

  useEffect(() => {
    if (type === "book") {
      dispatch(fetchFirstBooksStart());
    } else if (type === "course") {
      dispatch(fetchFirstCoursesStart());
    }
  }, [type]);

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
      {type === "book" ? (
        <ContentList
          typeOfContent={typeOfContent}
          content={cards.books}
          isPending={isPending}
          recent={false}
        />
      ) : (
        <ContentList
          typeOfContent={typeOfContent}
          content={cards.courses}
          isPending={isPending}
          recent={false}
        />
      )}
    </Container>
  );
};

export default ItemsPage;
