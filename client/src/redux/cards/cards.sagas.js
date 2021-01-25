import {
  fetchFirstBooksFailure,
  fetchFirstBooksSuccess,
  fetchFirstCoursesFailure,
  fetchFirstCoursesSuccess,
  fetchLatestFailure,
  fetchLatestSuccess,
  fetchPortionOfBooksFailure,
  fetchPortionOfBooksSuccess,
  fetchPortionOfCoursesFailure,
  fetchPortionOfCoursesSuccess,
} from "./cards.actions";
import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import CardsActionTypes from "./cards.types";
import { urlConstants } from "../../constants/urlConstants";
import { apiCall, getData } from "../../api/api";
import { addNotification } from "../notifications/notifications.actions";

export function* fetchLatestStart() {
  yield takeLatest(CardsActionTypes.FETCH_CONTENT_START, fetchLatestAsync);
}

async function fetchLatest() {
  const books = getData(urlConstants.latestBooks);
  const courses = getData(urlConstants.latestCourses);

  const result = await Promise.all([books, courses]);

  return {
    books: result[0],
    courses: result[1],
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

export function* fetchFirstBooksStart() {
  yield takeLatest(CardsActionTypes.FETCH_FIRST_BOOKS_START, fetchItemsAsync);
}

export function* fetchFirstCoursesStart() {
  yield takeLatest(CardsActionTypes.FETCH_FIRST_COURSES_START, fetchItemsAsync);
}

export function* fetchPortionOfBooksStart() {
  yield takeLatest(
    CardsActionTypes.FETCH_PORTION_OF_BOOKS_START,
    fetchItemsAsync
  );
}

export function* fetchPortionOfCoursesStart() {
  yield takeLatest(
    CardsActionTypes.FETCH_PORTION_OF_COURSES_START,
    fetchItemsAsync
  );
}

function* fetchItemsAsync(action) {
  const { startOn, quantity, type } = action.payload;
  const newEndlessUrl =
    type === "book" ? urlConstants.endlessBooks : urlConstants.endlessCourses;
  try {
    let response = yield call(
      getData,
      ...[`${newEndlessUrl}/${startOn}/${quantity}`]
    );
    if (response.success === true) {
      // Checking starting index to know, which action to fire (initial fetch or not)
      if (startOn !== 1) {
        if (type === "book") {
          yield put(fetchPortionOfBooksSuccess(response));
        } else if (type === "course") {
          yield put(fetchPortionOfCoursesSuccess(response));
        }
      } else {
        if (type === "book") {
          yield put(fetchFirstBooksSuccess(response));
        } else if (type === "course") {
          yield put(fetchFirstCoursesSuccess(response));
        }
      }
    } else {
      if (startOn !== 1) {
        if (type === "book") {
          yield put(fetchPortionOfBooksFailure("Error with fetching books"));
        } else if (type === "course") {
          yield put(
            fetchPortionOfCoursesFailure("Error with fetching courses")
          );
        }
      } else {
        if (type === "book") {
          yield put(fetchFirstBooksFailure("Error with fetching books"));
        } else if (type === "course") {
          yield put(fetchFirstCoursesFailure("Error with fetching courses"));
        }
      }
      yield put(
        addNotification({
          title: "Error with item fetching",
          message: "Error occurred when fetching your items",
          alert: true,
        })
      );
    }
  } catch (err) {
    if (startOn !== 1) {
      if (type === "book") {
        yield put(fetchPortionOfBooksFailure("Error with fetching books"));
      } else if (type === "course") {
        yield put(fetchPortionOfCoursesFailure("Error with fetching courses"));
      }
    } else {
      if (type === "book") {
        yield put(fetchFirstBooksFailure("Error with fetching books"));
      } else if (type === "course") {
        yield put(fetchFirstCoursesFailure("Error with fetching courses"));
      }
    }
    yield put(
      addNotification({
        title: "Error with item fetching",
        message: "Error occurred when fetching your items",
        alert: true,
      })
    );
  }
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
          message:
            response.message.length > 0
              ? response.message
              : "Error occurred when updating your item",
          alert: true,
        })
      );
    }
  } catch (err) {
    yield put(
      addNotification({
        title: "Error updating your item",
        message:
          response.message.length > 0
            ? response.message
            : "Error occurred when updating your item",
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
          message:
            response.message.length > 0
              ? response.message
              : "Error occurred when deleting your item",
          alert: true,
        })
      );
    }
  } catch (err) {
    yield put(
      addNotification({
        title: "Error deleting your item",
        message:
          response.message.length > 0
            ? response.message
            : "Error occurred when deleting your item",
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
    call(fetchFirstBooksStart),
    call(fetchFirstCoursesStart),
    call(fetchPortionOfBooksStart),
    call(fetchPortionOfCoursesStart),
    call(updateCardStart),
    call(deleteCardStart),
  ]);
}
