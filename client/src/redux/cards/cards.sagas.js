import { fetchLatestFailure, fetchLatestSuccess } from "./cards.actions";
import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import CardsActionTypes from "./cards.types";
import { urlConstants } from "../../constants/urlConstants";
import { apiCall, getData } from "../../api/api";
import { addNotification } from "../notifications/notifications.actions";

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

function* updateCard(action) {
  const { data, type } = action.payload;
  let response;
  try {
    if (type === "book") {
      response = yield call(
        apiCall,
        ...[`${urlConstants.books}/${data.bookid}`, data, "put"]
      );
    } else if (type === "course") {
      response = yield call(
        apiCall,
        ...[`${urlConstants.courses}/${data.courseid}`, data, "put"]
      );
    }
    if (response.updated === true) {
      yield put(
        addNotification({
          title: "Item updated",
          message: "Your item was successfully updated",
          alert: false,
        })
      );
    } else {
      yield put(
        addNotification({
          title: "Error updating your item",
          message: "Error occurred when updating your item",
          alert: true,
        })
      );
    }
  } catch (err) {
    yield put(
      addNotification({
        title: "Error updating your item",
        message: "Error occurred when updating your item",
        alert: true,
      })
    );
  }
}

function* deleteCard(action) {
  const { data, type, history } = action.payload;
  let response;
  let urlToRedirect;
  try {
    if (type === "book") {
      response = yield call(
        apiCall,
        ...[`${urlConstants.books}/${data.bookid}`, data, "delete"]
      );
      urlToRedirect = "/books";
    } else if (type === "course") {
      response = yield call(
        apiCall,
        ...[`${urlConstants.courses}/${data.courseid}`, data, "delete"]
      );
      urlToRedirect = "/courses";
    }
    if (response.deleted === true) {
      history.push(urlToRedirect);
      yield put(
        addNotification({
          title: "Item deleted",
          message: "Your item was successfully deleted",
          alert: false,
        })
      );
    } else {
      yield put(
        addNotification({
          title: "Error deleting your item",
          message: "Error occurred when deleting your item",
          alert: true,
        })
      );
    }
  } catch (err) {
    yield put(
      addNotification({
        title: "Error deleting your item",
        message: "Error occurred when deleting your item",
        alert: true,
      })
    );
  }
}

export function* updateCardStart() {
  yield takeLatest(CardsActionTypes.UPDATE_CARD, updateCard);
}

export function* deleteCardStart() {
  yield takeLatest(CardsActionTypes.DELETE_CARD, deleteCard);
}

export function* cardsSagas() {
  yield all([
    call(fetchLatestStart),
    call(updateCardStart),
    call(deleteCardStart),
  ]);
}
