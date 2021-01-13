import React from "react";
import ContentListCard from "../content-list-card/content-list-card.component";
import {
  ContentListContainer,
  ContentListCards,
  ContentListContainerHeader,
  ContentListHeaderLink,
  ContentListNoCards,
} from "./content-list.styles";
import { useHistory } from "react-router-dom";
import Loader from "../loader/loader.component";

const ContentList = ({ typeOfContent, content, isPending }) => {
  let history = useHistory();

  let type;

  typeOfContent === "Books" ? (type = "books") : (type = "courses");

  return (
    <>
      <ContentListContainer>
        <ContentListContainerHeader>
          <h1>Latest added {typeOfContent}</h1>
          <ContentListHeaderLink onClick={() => history.push(`/${type}`)}>
            Watch all
          </ContentListHeaderLink>
        </ContentListContainerHeader>
        {isPending ? (
          <Loader />
        ) : content.length ? (
          <ContentListCards>
            {content.map((card, i) => {
              let id;
              if (type === "books") {
                id = content[i].bookid;
              } else if (type === "courses") {
                id = content[i].courseid;
              }
              return (
                <ContentListCard
                  _id={id}
                  key={id}
                  name={content[i].name}
                  image={content[i].image}
                  author={content[i].author}
                  type={type}
                />
              );
            })}
          </ContentListCards>
        ) : (
          <ContentListNoCards>No data here for now</ContentListNoCards>
        )}
      </ContentListContainer>
    </>
  );
};

export default ContentList;
