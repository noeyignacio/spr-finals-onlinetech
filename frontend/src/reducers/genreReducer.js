import {
  GET_GENRES,
  GET_GENRE,
  DELETE_GENRE
} from "../components/actions/types";

const initialState = {
  genres: [],
  genre: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };

    case GET_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case DELETE_GENRE:
      return {
        ...state,
        genres: state.genres.filter(
          genre => genre.genreIdentifier !== action.payload
        )
      };

    default:
      return state;
  }
}
