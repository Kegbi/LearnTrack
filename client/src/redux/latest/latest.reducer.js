import LatestActionTypes from "./latest.types";

const INITIAL_STATE = {
  content: {
    books: [],
    courses: [],
  },
  isPending: false,
  errorMessage: undefined,
};

const latestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LatestActionTypes.FETCH_CONTENT_START:
      return {
        ...state,
        isPending: true,
      };
    case LatestActionTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.payload,
        isPending: false,
      };
    case LatestActionTypes.FETCH_CONTENT_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default latestReducer;
