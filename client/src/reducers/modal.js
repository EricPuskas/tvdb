import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";

/** Initial State */
const initialState = {
  type: null,
  props: {}
};

/** Modal reducer */
export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        type: payload.type,
        props: payload.props
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
