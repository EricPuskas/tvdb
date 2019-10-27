import { SEARCH, CLEAN_UP, LOADING } from "../actions/types";
const initState = {
  search_results: [],
  loading: false
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH:
      return {
        ...state,
        search_results: payload.data,
        loading: false
      };
    case CLEAN_UP:
      return initState;
    default:
      return state;
  }
}
