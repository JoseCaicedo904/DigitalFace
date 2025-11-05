import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Forces window scroll position to reset to the top whenever the route changes.
 */
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
