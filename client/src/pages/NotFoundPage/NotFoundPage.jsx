import React from "react";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  font-size: 9rem;
  margin-bottom: 5px;
`;

export const Subheader = styled.h2`
  font-size: 2rem;
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <TextGroup>
          <Header>404</Header>
          <Subheader>Page not found</Subheader>
        </TextGroup>
      </Container>
    </>
  );
};

export default NotFoundPage;
