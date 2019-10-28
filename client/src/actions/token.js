import setToken from "../utils/setToken";
import axios from "axios";
import { GET_TOKEN, GET_ERRORS } from "./types";

// Get Token
export const getToken = () => async dispatch => {
  try {
    let res = await axios.post("/api/auth");
    const { token } = res.data;
    localStorage.setItem("token", token);
    setToken(token);
    dispatch({
      type: GET_TOKEN,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
