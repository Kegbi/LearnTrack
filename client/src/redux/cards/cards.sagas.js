import { fetchLatestFailure, fetchLatestSuccess } from "./cards.actions";
import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import CardsActionTypes from "./cards.types";
import { urlConstants } from "../../constants/urlConstants";
import { getData } from "../../api/api";

export function* fetchLatestAsync() {
  try {
    let data = yield call(fetchLatest);
    yield put(fetchLatestSuccess(data));
  } catch (err) {
    yield put(fetchLatestFailure(err));
  }
}

async function fetchLatest() {
  const data = {};
  data.books = await getData(urlConstants.latestBooks);
  data.courses = await getData(urlConstants.latestCourses);
  return data;
}

export function* fetchLatestStart() {
  yield takeLatest(CardsActionTypes.FETCH_CONTENT_START, fetchLatestAsync);
}

export function* cardsSagas() {
  yield all([call(fetchLatestStart)]);
}
