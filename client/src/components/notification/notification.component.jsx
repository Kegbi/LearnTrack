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
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: NotificationsActionTypes.REMOVE_NOTIFICATION,
        id: props.id,
      });
    }, 400);
  };

  React.useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  React.useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <NotificationItem
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      exit={exit ? "exit" : ""}
    >
      <NotificationItemHeader>{props.title}</NotificationItemHeader>
      <NotificationItemMessage>{props.message}</NotificationItemMessage>
      <NotificationItemBar success={props.typeOfItem} width={width} />
    </NotificationItem>
  );
};

export default Notification;
