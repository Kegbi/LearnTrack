import CardsActionTypes from "./cards.types";

const INITIAL_STATE = {
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
        cards: action.payload,
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
        cards: { books: action.payload.data, courses: [] },
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
        cards: { books: [], courses: action.payload.data },
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
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_SUCCESS:
      return {
        ...state,
        moreAvailable: action.payload.moreAvailable,
        cards: {
          books: [...state.cards.books, ...action.payload.data],
          courses: [],
        },
      };
    case CardsActionTypes.FETCH_PORTION_OF_BOOKS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_START:
      return {
        ...state,
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_SUCCESS:
      return {
        ...state,
        moreAvailable: action.payload.moreAvailable,
        cards: {
          books: [],
          courses: [...state.cards.courses, ...action.payload.data],
        },
      };
    case CardsActionTypes.FETCH_PORTION_OF_COURSES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
