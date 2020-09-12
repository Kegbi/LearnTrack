import React from "react";
import ContentListCard from "../content-list-card/content-list-card.component";
import {
  ContentListContainer,
  ContentListCards,
  ContentListContainerHeader,
  ContentListHeaderLink,
} from "./content-list.styles";
import { useHistory } from "react-router-dom";

const ContentList = ({ typeOfContent }) => {
  let history = useHistory();

  let type;

  typeOfContent === "Books" ? (type = "books") : (type = "courses");

  const name = "Very long name of the famous book";
  const author = "Book Author";
  const image = "";
  const _id = "2";
  return (
    <>
      <ContentListContainer>
        <ContentListContainerHeader>
          <h1>Latest added {typeOfContent}</h1>
          <ContentListHeaderLink
            onClick={() =>
              typeOfContent === "Books"
                ? history.push(`/${type}`)
                : history.push(`/${type}`)
            }
          >
            Watch all
          </ContentListHeaderLink>
        </ContentListContainerHeader>
        <ContentListCards>
          <ContentListCard
            _id={_id}
            image={image}
            name={name}
            author={author}
            type={type}
          />
        </ContentListCards>
      </ContentListContainer>
    </>
  );
};

export default ContentList;
