import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
export const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })

    // Uncommenting the above, enables the use of the Redux Dev Tools extension in Chrome.
    // It's commented at this time because mocking the store (for testing) would fail because of the extension
  )
);

export default store;
