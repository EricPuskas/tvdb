import jwt_decode from "jwt-decode";

// Redux Store
import store from "../store";

// Utilities
import setToken from "./setToken";

// Actions
import { getToken } from "../actions/token";

const checkForToken = () => {
  // Check for token
  if (!localStorage.token) {
    store.dispatch(getToken());
    setToken(localStorage.token);
  } else {
    setToken(localStorage.token);
    // Decode token to be able to check if it expired
    const decoded = jwt_decode(localStorage.token);
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(getToken());
    }
  }
};

export default checkForToken;
