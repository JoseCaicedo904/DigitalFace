import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Forces window scroll position to reset to the top whenever the route changes.
 */
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
