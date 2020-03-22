import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import genreReducer from "./genreReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers({
  errors: errorReducer,
  genre: genreReducer,
  backlog: backlogReducer
});
