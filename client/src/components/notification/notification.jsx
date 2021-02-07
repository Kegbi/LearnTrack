import React, { useState } from "react";
import { useDispatch } from "react-redux";

import NotificationsActionTypes from "../../redux/notifications/notifications.types";

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

const NotificationItem = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadows.lg};
  border-radius: ${(p) => p.theme.radius.lg};
  overflow: hidden;
  margin-bottom: ${(p) => p.theme.spacing.sm};
  animation: ${(p) =>
    p.exit === true
      ? css`
          ${SlideRight} 0.4s
        `
      : css`
          ${SlideLeft} 0.4s
        `};
  animation-fill-mode: forwards;
  width: 300px;
`;

const NotificationItemHeader = styled.h3`
  margin: 0;
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.xs} 0;
`;

const NotificationItemMessage = styled.p`
  margin: 0;
  padding: ${(p) => p.theme.spacing.xs};
`;

const BarFill = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const NotificationItemBar = styled.div`
  animation: ${() =>
    css`
      ${BarFill} 7s linear
    `};
  height: 10px;
  background-color: ${(p) =>
    p.alert ? p.theme.colors.error.main : p.theme.colors.success};
`;

const Notification = (props) => {
  const dispatch = useDispatch();

  const [exit, setExit] = useState(false);

  const handleCloseNotification = () => {
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: NotificationsActionTypes.REMOVE_NOTIFICATION,
        id: props.id,
      });
    }, 400);
  };

  React.useEffect(() => {
    setTimeout(() => {
      handleCloseNotification();
    }, 7000);
  }, []);

  return (
    <NotificationItem exit={exit}>
      <NotificationItemHeader>{props.title}</NotificationItemHeader>
      <NotificationItemMessage>{props.message}</NotificationItemMessage>
      <NotificationItemBar alert={props.alert} />
    </NotificationItem>
  );
};

export default Notification;
