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
  moreAvailable: false,
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
    case CardsActionTypes.FETCH_FIRST_BOOKS_START:
      return {
        ...state,
        isPending: true,
      };
    case CardsActionTypes.FETCH_FIRST_BOOKS_SUCCESS:
      return {
        ...state,
        moreAvailable: action.payload.moreAvailable,
        cards: { books: action.payload.payload, courses: [] },
        isPending: false,
      };
    case CardsActionTypes.FETCH_FIRST_BOOKS_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    case CardsActionTypes.FETCH_FIRST_COURSES_START:
      return {
        ...state,
        isPending: true,
      };
    case CardsActionTypes.FETCH_FIRST_COURSES_SUCCESS:
      return {
        ...state,
        moreAvailable: action.payload.moreAvailable,
        cards: { books: [], courses: action.payload.payload },
        isPending: false,
      };
    case CardsActionTypes.FETCH_FIRST_COURSES_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_START:
      return {
        ...state,
        // isPending: true,
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_SUCCESS:
      return {
        ...state,
        moreAvailable: action.payload.moreAvailable,
        cards: {
          books: [...state.cards.books, ...action.payload.payload],
          courses: [],
        },
        // isPending: false,
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_FAILURE:
      return {
        ...state,
        // isPending: false,
        errorMessage: action.payload,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_START:
      return {
        ...state,
        // isPending: true,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_SUCCESS:
      return {
        ...state,
        moreAvailable: action.payload.moreAvailable,
        cards: {
          books: [],
          courses: [...state.cards.courses, ...action.payload.payload],
        },
        // isPending: false,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_FAILURE:
      return {
        ...state,
        // isPending: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
