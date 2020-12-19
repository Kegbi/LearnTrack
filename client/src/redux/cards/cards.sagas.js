import { fetchLatestFailure, fetchLatestSuccess } from "./cards.actions";
import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import CardsActionTypes from "./cards.types";
import { urlConstants } from "../../constants/urlConstants";
import { apiCall, getData } from "../../api/api";

async function fetchLatest() {
  return {
    books: await getData(urlConstants.latestBooks),
    courses: await getData(urlConstants.latestCourses),
  };
}

function* fetchLatestAsync() {
  try {
    let data = yield call(fetchLatest);
    yield put(fetchLatestSuccess(data));
  } catch (err) {
    yield put(fetchLatestFailure(err));
  }
}

export function* fetchLatestStart() {
  yield takeLatest(CardsActionTypes.FETCH_CONTENT_START, fetchLatestAsync);
}

async function updateCard(params) {
  return await apiCall(params.url, params.payload, params.action);
}

function* saveCard(action) {
  try {
    if (action.typeOfCard === "book") {
      yield call(updateCard, {
        url: `${urlConstants.books}/${action.payload.bookid}`,
        payload: action.payload,
        action: "put",
      });
    } else if (action.typeOfCard === "course") {
      yield call(updateCard, {
        url: `${urlConstants.courses}/${action.payload.courseid}`,
        payload: action.payload,
        action: "put",
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export function* saveCardStart() {
  yield takeLatest(CardsActionTypes.UPDATE_CARD, saveCard);
}

export function* cardsSagas() {
  yield all([call(fetchLatestStart), call(saveCardStart)]);
}
