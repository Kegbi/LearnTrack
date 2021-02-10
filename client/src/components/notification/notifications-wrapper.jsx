import React from "react";
import { useSelector } from "react-redux";

import Notification from "./notification";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 300px;
`;

const NotificationsWrapper = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <Wrapper>
      {notifications.map((notification) => {
        return <Notification key={notification.id} {...notification} />;
      })}
    </Wrapper>
  );
};

export default NotificationsWrapper;
