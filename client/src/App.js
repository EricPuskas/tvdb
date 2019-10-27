import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import jwt_decode from "jwt-decode";

// Actions
import { getToken } from "./actions/token";

// Utilities
import setToken from "./utils/setToken";

// Redux Store
import store from "./store";

// Check for token
if (!localStorage.token) {
  store.dispatch(getToken());
  setToken(localStorage.token);
} else {
  setToken(localStorage.token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.token);
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(getToken());
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={SearchResults} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
