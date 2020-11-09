import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import latestReducer from "./latest/latest.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  latest: latestReducer,
});
