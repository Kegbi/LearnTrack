import React from "react";

import styled from "styled-components";

const LoaderOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${(p) => p.theme.colors.grey[400]};
  border-radius: 50%;
  border-top-color: ${(p) => p.theme.colors.grey[900]};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <LoaderOverlay>
    <LoaderContainer />
  </LoaderOverlay>
);

export default Loader;
