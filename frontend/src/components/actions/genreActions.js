import axios from "axios";
import { GET_ERRORS, GET_GENRES, GET_GENRE, DELETE_GENRE } from "./types";

export const createGenre = (genre, history) => async dispatch => {
  try {
    const res = await axios.post("/api/genre", genre);
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getGenres = () => async dispatch => {
  const res = await axios.get("/api/genre/all");
  dispatch({
    type: GET_GENRES,
    payload: res.data
  });
};

export const getGenre = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/genre/${id}`);
    dispatch({
      type: GET_GENRE,
      payload: res.data
    });
  } catch (error) {
    history.push("/");
  }
};

export const deleteGenre = id => async dispacth => {
  await axios.delete(`/api/genre/${id}`);
  dispacth({
    type: DELETE_GENRE,
    payload: id
  });
};
