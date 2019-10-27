import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
const initState = {
  error: ""
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return {
        error: payload
      };
    case CLEAR_ERRORS:
      return initState;
    default:
      return state;
  }
}
