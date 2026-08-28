import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * A call to action that may point either at another route or at a section of
 * the page it already sits on — the booking calendar in particular.
 *
 * React Router's Link does not scroll to a fragment, so a `#section` href stays
 * a plain anchor and the browser handles it, picking up the global
 * `scroll-behavior: smooth`. Everything else routes as before.
 */
export function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
