import styled, { css, keyframes } from "styled-components";

const SlideLeft = keyframes`
    0% {
        margin-left: 120%;
    }

    100% {
        margin-left: 0;
    }
`;

const SlideRight = keyframes`
    0% {
        margin-left: 0;
    }

    100% {
        margin-left: 120%;
    }
`;

export const NotificationItem = styled.div`
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  animation: ${(props) =>
    props.exit === "exit"
      ? css`
          ${SlideRight} 0.4s
        `
      : css`
          ${SlideLeft} 0.4s
        `};
  animation-fill-mode: forwards;
  width: 300px;
`;

export const NotificationItemText = styled.p`
  margin: 0;
  padding: 10px;
`;

export const NotificationItemBar = styled.div`
  height: 10px;
  width: ${(props) => `${props.width}%`};
  background-color: ${(props) =>
    props.success === "SUCCESS" ? "#65d266" : "red"};
`;
