import React from "react";
import { useHistory } from "react-router-dom";

import Loader from "../loader/loader";
import ContentListCard from "./content-list-card";
import InfiniteScroll from "react-infinite-scroll-component";

import styled from "styled-components";

const Container = styled.div`
  margin-top: ${(p) => p.theme.spacing.lg};
  width: 100%;
`;

const Cards = styled.div`
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  grid-gap: 34px;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.md};
  @media (max-width: 1880px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 1630px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 875px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLink = styled.a`
  font-size: 1.3rem;
  color: ${(p) => p.theme.colors.grey[700]};
  cursor: pointer;
`;

const NoCards = styled.h2`
  font-size: 1.5rem;
  margin-top: ${(p) => p.theme.spacing.md};
`;

const ContentList = ({
  typeOfContent,
  content,
  isPending,
  recent,
  fetchMore,
  hasMore,
}) => {
  let history = useHistory();

  let type = typeOfContent === "books" ? "books" : "courses";

  return (
    <>
      <Container>
        {recent ? (
          <ContainerHeader>
            <h1>Latest added {typeOfContent}</h1>
            <HeaderLink onClick={() => history.push(`/${type}`)}>
              Watch all
            </HeaderLink>
          </ContainerHeader>
        ) : null}
        {isPending ? (
          <Loader />
        ) : content.length ? (
          recent ? (
            <Cards>
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
            </Cards>
          ) : (
            <Cards>
              <InfiniteScroll
                dataLength={content.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={
                  <h2
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    No more items here
                  </h2>
                }
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
            </Cards>
          )
        ) : (
          <NoCards>No data here for now</NoCards>
        )}
      </Container>
    </>
  );
};

export default ContentList;
