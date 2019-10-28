import { combineReducers } from "redux";
import showsReducer from "./shows";
import modalReducer from "./modal";
import errorReducer from "./errors";

export default combineReducers({
  shows: showsReducer,
  modal: modalReducer,
  errors: errorReducer
});
