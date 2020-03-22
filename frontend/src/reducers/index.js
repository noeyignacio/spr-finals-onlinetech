import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import genreReducer from "./genreReducer";

export default combineReducers({
  errors: errorReducer,
  genre: genreReducer
});
