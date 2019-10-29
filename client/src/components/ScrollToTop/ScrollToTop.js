import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ children, location: { pathname } }) => {
  // Upon route change, bring the scroll back to top, react-router used to do this but it no longer does
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
