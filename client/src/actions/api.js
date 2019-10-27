import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS, SEARCH, CLEAN_UP, LOADING } from "./types";

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
