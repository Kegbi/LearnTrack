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
import InfiniteScroll from "react-infinite-scroll-component";

const ContentList = ({
  typeOfContent,
  content,
  isPending,
  recent,
  fetchMore,
  hasMore,
}) => {
  let history = useHistory();

  let type;

  typeOfContent === "books" ? (type = "books") : (type = "courses");

  return (
    <>
      <ContentListContainer>
        {recent ? (
          <ContentListContainerHeader>
            <h1>Latest added {typeOfContent}</h1>
            <ContentListHeaderLink onClick={() => history.push(`/${type}`)}>
              Watch all
            </ContentListHeaderLink>
          </ContentListContainerHeader>
        ) : null}
        {isPending ? (
          <Loader />
        ) : content.length ? (
          recent ? (
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
            <ContentListCards>
              <InfiniteScroll
                dataLength={content.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={<Loader />}
                style={{
                  width: "100%",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  display: "grid",
                  gridGap: "34px",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
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
              </InfiniteScroll>
            </ContentListCards>
          )
        ) : (
          <ContentListNoCards>No data here for now</ContentListNoCards>
        )}
      </ContentListContainer>
    </>
  );
};

export default ContentList;
