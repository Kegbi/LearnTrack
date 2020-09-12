import React from "react";
import ContentListCard from "../content-list-card/content-list-card.component";
import { ContentListContainer, ContentListCards } from "./content-list.styles";

const ContentList = ({ typeOfContent }) => {
  const name = "Very long name of the famous book";
  const author = "Book Author";
  return (
    <>
      <ContentListContainer>
        <h1>Latest added {typeOfContent}</h1>
        <ContentListCards>
          <ContentListCard name={name} author={author} />
        </ContentListCards>
      </ContentListContainer>
    </>
  );
};

export default ContentList;
