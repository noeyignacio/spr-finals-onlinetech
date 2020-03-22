import {
  GET_BACKLOG,
  GET_BOOK,
  DELETE_BOOK
} from "../components/actions/types";

const initialState = {
  books: [],
  book: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        books: action.payload
      };

    case GET_BOOK:
      return {
        ...state,
        book: action.payload
      };

    case DELETE_BOOK:
      return {
        ...state
      };

    default:
      return state;
  }
}
