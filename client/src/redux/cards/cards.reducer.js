import CardsActionTypes from "./cards.types";

const INITIAL_STATE = {
  latest: {
    books: [],
    courses: [],
  },
  cards: {
    books: [],
    courses: [],
  },
  isPending: false,
  errorMessage: undefined,
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsActionTypes.FETCH_CONTENT_START:
      return {
        ...state,
        isPending: true,
      };
    case CardsActionTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        latest: action.payload,
        isPending: false,
      };
    case CardsActionTypes.FETCH_CONTENT_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
