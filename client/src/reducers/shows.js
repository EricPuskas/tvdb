import { SEARCH, CLEAN_UP, LOADING, GET_SHOW } from "../actions/types";
const initState = {
  search_results: [],
  show_info: {
    show: {},
    poster: {},
    episodes: [{ links: {} }, { data: [] }]
  },
  loading: false
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SHOW:
      return {
        ...state,
        loading: false,
        show_info: {
          show: payload.show.data,
          poster: payload.poster,
          episodes: payload.episodes
        }
      };
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
