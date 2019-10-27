import { SEARCH, CLEAN_UP } from "../actions/types";
const initState = {
  search_results: []
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      return {
        ...state,
        search_results: payload.data
      };
    case CLEAN_UP:
      return initState;
    default:
      return state;
  }
}
