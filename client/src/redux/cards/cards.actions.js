import CardsActionTypes from "./cards.types";

export const fetchLatestStart = () => ({
  type: CardsActionTypes.FETCH_CONTENT_START,
});

export const fetchLatestSuccess = (data) => ({
  type: CardsActionTypes.FETCH_CONTENT_SUCCESS,
  payload: data,
});

export const fetchLatestFailure = (err) => ({
  type: CardsActionTypes.FETCH_CONTENT_FAILURE,
  payload: err,
});

export const fetchFirstBooksStart = () => ({
  type: CardsActionTypes.FETCH_FIRST_BOOKS_START,
});

export const fetchFirstBooksSuccess = (data) => ({
  type: CardsActionTypes.FETCH_FIRST_BOOKS_SUCCESS,
  payload: data,
});

export const fetchFirstBooksFailure = (err) => ({
  type: CardsActionTypes.FETCH_FIRST_BOOKS_FAILURE,
  payload: err,
});

export const fetchFirstCoursesStart = () => ({
  type: CardsActionTypes.FETCH_FIRST_COURSES_START,
});

export const fetchFirstCoursesSuccess = (data) => ({
  type: CardsActionTypes.FETCH_FIRST_COURSES_SUCCESS,
  payload: data,
});

export const fetchFirstCoursesFailure = (err) => ({
  type: CardsActionTypes.FETCH_FIRST_COURSES_FAILURE,
  payload: err,
});

export const fetchPortionOfBooksStart = () => ({
  type: CardsActionTypes.FETCH_PORTION_OF_BOOKS_START,
});

export const fetchPortionOfBooksSuccess = (data) => ({
  type: CardsActionTypes.FETCH_PORTION_OF_BOOKS_SUCCESS,
  payload: data,
});

export const fetchPortionOfBooksFailure = (err) => ({
  type: CardsActionTypes.FETCH_PORTION_OF_BOOKS_FAILURE,
  payload: err,
});

export const fetchPortionOfCoursesStart = () => ({
  type: CardsActionTypes.FETCH_PORTION_OF_COURSES_START,
});

export const fetchPortionOfCoursesSuccess = (data) => ({
  type: CardsActionTypes.FETCH_PORTION_OF_COURSES_SUCCESS,
  payload: data,
});

export const fetchPortionOfCoursesFailure = (err) => ({
  type: CardsActionTypes.FETCH_PORTION_OF_COURSES_FAILURE,
  payload: err,
});

export const uploadNewCard = (data) => ({
  type: CardsActionTypes.ADD_CARD,
  payload: data,
});

export const updateCard = (data, type) => ({
  type: CardsActionTypes.UPDATE_CARD,
  payload: { data, type },
  typeOfCard: type,
});

export const deleteCard = (data, type, history) => ({
  type: CardsActionTypes.DELETE_CARD,
  payload: { data, type, history },
});
