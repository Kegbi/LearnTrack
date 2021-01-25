import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/cards.selectors";
import { useHistory } from "react-router-dom";
import {
  fetchFirstBooksStart,
  fetchFirstCoursesStart,
  fetchPortionOfBooksStart,
  fetchPortionOfCoursesStart,
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
  const [currentItem, setCurrentItem] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const isPending = useSelector((state) => state.cards.isPending);
  const moreAvailable = useSelector((state) => state.cards.moreAvailable);
  const cards = useSelector(selectCards);

  let typeOfContent = type === "book" ? "books" : "courses";
  let itemsToFetch = 28;

  const fetchItems = () => {
    if (type === "book") {
      dispatch(fetchPortionOfBooksStart(currentItem, itemsToFetch, type));
    } else if (type === "course") {
      dispatch(fetchPortionOfCoursesStart(currentItem, itemsToFetch, type));
    }
    setCurrentItem(currentItem + itemsToFetch);
  };

  useEffect(() => {
    setCurrentItem(1);
    if (type === "book") {
      dispatch(fetchFirstBooksStart({ quantity: itemsToFetch }));
    } else if (type === "course") {
      dispatch(fetchFirstCoursesStart({ quantity: itemsToFetch }));
    }
    setCurrentItem(itemsToFetch + 1);
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
          fetchMore={fetchItems}
          hasMore={moreAvailable}
        />
      ) : (
        <ContentList
          typeOfContent={typeOfContent}
          content={cards.courses}
          isPending={isPending}
          recent={false}
          fetchMore={fetchItems}
          hasMore={moreAvailable}
        />
      )}
    </Container>
  );
};

export default ItemsPage;
