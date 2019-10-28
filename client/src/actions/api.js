import axios from "axios";
import {
  GET_ERRORS,
  CLEAR_ERRORS,
  SEARCH,
  CLEAN_UP,
  LOADING,
  GET_SHOW
} from "./types";

export const searchSeries = data => async dispatch => {
  try {
    dispatch(loadingSearch());
    let res = await axios.post("/api/search/series", { searchText: data });
    dispatch({
      type: SEARCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getShow = id => async dispatch => {
  try {
    dispatch(loadingSearch());
    let res = await axios.get(`/api/shows/${id}`);
    dispatch({
      type: GET_SHOW,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const loadingSearch = () => {
  return {
    type: LOADING
  };
};
export const cleanUp = () => {
  return {
    type: CLEAN_UP
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
