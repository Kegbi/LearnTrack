import { v4 } from "uuid";
import NotificationsActionTypes from "./notifications.types";

export const addNotification = (data) => ({
  type: NotificationsActionTypes.ADD_NOTIFICATION,
  payload: {
    id: v4(),
    ...data,
  },
});
