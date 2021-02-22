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

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
  width: 100%;
`;

export const ItemsPageControlsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemsPageTitlesGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemsPageTitle = styled.button`
  color: ${(p) => (p.active ? p.theme.colors.black : p.theme.colors.grey[600])};
  margin: 0 15px 0;
  border: none;
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  outline: none;
`;

export const ItemsPageAddNew = styled.button`
  cursor: pointer;
  color: ${(p) => p.theme.colors.grey[600]};
  border: none;
  padding: 0 ${(p) => p.theme.spacing.xs};
  margin: 0;
  text-align: center;
  background-color: transparent;
  font-weight: normal;
  outline: none;
  font-size: 1.3rem;
`;

import ContentList from "../../components/content-list/content-list";

const ItemsPage = ({ type, admin }) => {
  const [currentItem, setCurrentItem] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const isPending = useSelector((state) => state.cards.isPending);
  const moreAvailable = useSelector((state) => state.cards.moreAvailable);
  const cards = useSelector(selectCards);

  const typeOfContent = type === "book" ? "books" : "courses";
  const itemsToFetch = 50;

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
          isPending={isPending}
          content={cards.books}
          recent={false}
          fetchMore={fetchItems}
          hasMore={moreAvailable}
        />
      ) : (
        <ContentList
          typeOfContent={typeOfContent}
          isPending={isPending}
          content={cards.courses}
          recent={false}
          fetchMore={fetchItems}
          hasMore={moreAvailable}
        />
      )}
    </Container>
  );
};

export default ItemsPage;
