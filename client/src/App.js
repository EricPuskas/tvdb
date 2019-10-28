import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Search from "./components/Search/Search";
import Show from "./components/Show/Show";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Modals
import ModalContainer from "./components/Modal/ModalContainer";

// Utilities
import checkForToken from "./utils/checkForToken";

const App = () => {
  checkForToken();
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={SearchResults} />
            <Route exact path="/shows/:id" component={Show} />
          </Switch>
          <Footer />
          <ModalContainer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
