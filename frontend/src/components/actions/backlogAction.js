import axios from "axios";
import { GET_ERRORS, GET_BACKLOG } from "./types";

export const addBook = (backlog_id, book, history) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${backlog_id}`, book);
    history.push(`/genreBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const getBackLog = backlog_id => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {}
};
