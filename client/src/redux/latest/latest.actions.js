import LatestActionTypes from "./latest.types";

export const fetchLatestStart = () => ({
  type: LatestActionTypes.FETCH_CONTENT_START,
});

export const fetchLatestSuccess = (data) => ({
  type: LatestActionTypes.FETCH_CONTENT_SUCCESS,
  payload: data,
});

export const fetchLatestFailure = (err) => ({
  type: LatestActionTypes.FETCH_CONTENT_FAILURE,
  payload: err,
});
