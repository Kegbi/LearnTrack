import React from "react";
import { useSelector } from "react-redux";

import Notification from "./notification";

import styled from "styled-components";

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 300px;
`;

const NotificationsWrapper = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <NotificationWrapper>
      {notifications.map((notification) => {
        return <Notification key={notification.id} {...notification} />;
      })}
    </NotificationWrapper>
  );
};

export default NotificationsWrapper;
