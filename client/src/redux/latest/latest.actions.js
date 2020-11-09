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

// export const fetchLatest = () => async (dispatch) => {
//   dispatch({ type: LatestActionTypes.FETCH_CONTENT_START });
//   try {
//     let data = {};
//     data.books = await getData(urlConstants.books);
//     data.courses = await getData(urlConstants.courses);
//     await dispatch({
//       type: LatestActionTypes.FETCH_CONTENT_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({ type: LatestActionTypes.FETCH_CONTENT_FAILURE, payload: err });
//   }
// };
