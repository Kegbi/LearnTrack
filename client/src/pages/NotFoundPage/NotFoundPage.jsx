import React from "react";

import {
  NotFoundPageContainer,
  NotFoundPageHeader,
  NotFoundPageSubheader,
  NotFoundPageTextGroup,
} from "./NotFoundPage.styles";

const NotFoundPage = () => {
  return (
    <>
      <NotFoundPageContainer>
        <NotFoundPageTextGroup>
          <NotFoundPageHeader>404</NotFoundPageHeader>
          <NotFoundPageSubheader>Page not found</NotFoundPageSubheader>
        </NotFoundPageTextGroup>
      </NotFoundPageContainer>
    </>
  );
};

export default NotFoundPage;
