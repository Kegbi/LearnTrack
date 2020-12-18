import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cardsReducer from "./cards/cards.reducer";
import notificationsReducer from "./notifications/notifications.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  latest: cardsReducer,
  notifications: notificationsReducer,
});
