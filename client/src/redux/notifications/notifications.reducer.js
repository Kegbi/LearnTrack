import NotificationsActionTypes from "./notifications.types";

const INITIAL_STATE = [];

const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationsActionTypes.ADD_NOTIFICATION:
      return [...state, { ...action.payload }];
    case NotificationsActionTypes.REMOVE_NOTIFICATION:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

export default notificationsReducer;
