import React from "react";
import { useSelector } from "react-redux";
import Notification from "../../components/notification/notification.component";
import { NotificationWrapper } from "./notifications-wrapper.styles";

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
