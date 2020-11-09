import { all, call } from "redux-saga/effects";
import { latestSagas } from "./latest/latest.sagas";

export default function* rootSaga() {
  yield all([call(latestSagas)]);
}
