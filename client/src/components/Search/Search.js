import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Components
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";

// SCSS
import "./Search.scss";

const Search = ({ history, errors: { error } }) => {
  return (
    <div className="Search">
      <Logo text="Your favorite show, one click away!" />
      <SearchForm history={history} />
      {error ? <h3 className="Error">{`Error: ${error}`}</h3> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  null
)(withRouter(Search));
