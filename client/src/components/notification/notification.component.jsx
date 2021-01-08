import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NotificationsActionTypes from "../../redux/notifications/notifications.types";

import {
  NotificationItem,
  NotificationItemBar,
  NotificationItemHeader,
  NotificationItemMessage,
} from "./notification.styles";

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
