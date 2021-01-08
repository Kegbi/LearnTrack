import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  ItemsPageAddNew,
  ItemsPageControlsGroup,
  ItemsPageTitle,
  ItemsPageTitlesGroup,
} from "./ItemsPage.styles";

const ItemsPage = ({ type, admin }) => {
  let history = useHistory();

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
    </Container>
  );
};

export default ItemsPage;
