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
  errorMessage: null,
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
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_START:
      return {
        ...state,
        isPending: true,
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_SUCCESS:
      return {
        ...state,
        cards: { books: [...state.cards.books, action.payload] },
        isPending: false,
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_START:
      return {
        ...state,
        isPending: true,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_SUCCESS:
      return {
        ...state,
        cards: { courses: [...state.cards.courses, action.payload] },
        isPending: false,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_FAILURE:
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
