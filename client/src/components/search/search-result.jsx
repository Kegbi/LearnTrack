import React from "react";
import styled from "styled-components";

import { Spacing } from "../layout";
import Avatar from "../avatar";
import { A } from "../text";
import { clientConstants } from "../../constants/urlConstants";

const Root = styled.div`
  width: 100%;
  max-height: 350px;
  min-height: 40px;
  overflow: auto;
  position: absolute;
  top: 50px;
  font-size: ${(p) => p.theme.font.size.xs};
  box-shadow: ${(p) => p.theme.shadows.sm};
  background-color: ${(p) => p.theme.colors.white};
`;

const StyledA = styled(A)`
  display: block;

  &:hover {
    background-color: ${(p) => p.theme.colors.grey[100]};
  }
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(p) => p.theme.spacing.xs};
`;

const Name = styled.div`
  font-weight: ${(p) => p.theme.font.weight.bold};
`;

const Author = styled.div`
  font-size: ${(p) => p.theme.font.size.xxs};
`;

const NoSearchResult = styled.div`
  text-align: center;
  padding: ${(p) => p.theme.spacing.xs};
  color: ${(p) => p.theme.colors.text.main};
`;

/**
 * Displays search result, meant to be used in Search component
 */
const SearchResult = ({ items }) => {
  if (items.length < 1) {
    return (
      <Root>
        <NoSearchResult>No search results.</NoSearchResult>
      </Root>
    );
  }

  return (
    <Root>
      {items.map((item) => {
        const correctId = item.type === "book" ? item.bookid : item.courseid;

        return (
          <StyledA
            key={correctId + item.name}
            to={`/${item.type}s/${correctId}`}
          >
            <Item>
              <Avatar image={item.image} size={34} />

              <Spacing left="xs">
                <Name>{item.name}</Name>
                <Author>{item.author}</Author>
              </Spacing>
            </Item>
          </StyledA>
        );
      })}
    </Root>
  );
};

export default SearchResult;
