import React from "react";

import ContentListCard from "./content-list-card";

import styled from "styled-components";

const Wrapper = styled.div`
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

type DataType = {
  courseid?: number;
  bookid?: number;
  name: string;
  author: string;
  info: string;
  image: string;
  type: string;
};

type PropsType = {
  content: Array<DataType>;
  type: "books" | "courses";
};

const ContentListCardWrapper = ({ content, type }: PropsType) => {
  return (
    <Wrapper>
      {content.map((card: DataType) => {
        let id;
        if (type === "books") {
          id = card.bookid;
        } else if (type === "courses") {
          id = card.courseid;
        }
        return (
          <ContentListCard
            _id={id}
            key={id}
            name={card.name}
            image={card.image}
            author={card.author}
            type={type}
          />
        );
      })}
    </Wrapper>
  );
};

export default ContentListCardWrapper;
