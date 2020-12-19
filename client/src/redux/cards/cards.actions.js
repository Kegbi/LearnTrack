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

export const uploadNewCard = (data) => ({
  type: CardsActionTypes.ADD_CARD,
  payload: data,
});

export const updateCard = (data, type) => ({
  type: CardsActionTypes.UPDATE_CARD,
  payload: data,
  typeOfCard: type,
});
