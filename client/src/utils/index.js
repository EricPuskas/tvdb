import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { middleware } from "../store";

export const findByAttribute = (component, attr) =>
  component.find(`[data-test="${attr}"]`);

export const testStore = initState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initState);
};
