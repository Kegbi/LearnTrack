import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import latestReducer from "./latest/latest.reducer";
import notificationsReducer from "./notifications/notifications.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  latest: latestReducer,
  notifications: notificationsReducer,
});
