import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { anchorIdFromHash, scrollToPageAnchor } from "@/lib/anchorScroll";

/**
 * Forces window scroll position to reset to the top whenever the route changes.
 */
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const anchorId = anchorIdFromHash(hash);
      const target = anchorId ? document.getElementById(anchorId) : null;
      if (anchorId && target) {
        scrollToPageAnchor(
          anchorId,
          target.hasAttribute("data-pay-per-service-anchor")
            ? "smooth"
            : "auto",
        );
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
