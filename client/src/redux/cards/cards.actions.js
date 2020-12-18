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
