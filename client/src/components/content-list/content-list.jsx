import React from "react";
import { useHistory } from "react-router-dom";

import Loader from "../loader/loader";
import InfiniteScroll from "../infinite-scroll";

import styled from "styled-components";
import ContentListCardWrapper from "./content-list-card-wrapper";

const Container = styled.div`
  margin-top: ${(p) => p.theme.spacing.lg};
  width: 100%;
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
  isPending,
  content,
  recent,
  fetchMore,
  hasMore,
}) => {
  const history = useHistory();

  const type = typeOfContent === "books" ? "books" : "courses";

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
            <ContentListCardWrapper content={content} type={type} />
          ) : (
            <InfiniteScroll
              content={content}
              fetchMore={fetchMore}
              hasMore={hasMore}
              type={type}
              children={ContentListCardWrapper}
            />
          )
        ) : (
          <NoCards>No data here for now</NoCards>
        )}
      </Container>
    </>
  );
};

export default ContentList;
