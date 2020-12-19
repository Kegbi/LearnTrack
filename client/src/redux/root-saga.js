import { all, call } from "redux-saga/effects";
import { cardsSagas } from "./cards/cards.sagas";

export default function* rootSaga() {
  yield all([call(cardsSagas)]);
}
