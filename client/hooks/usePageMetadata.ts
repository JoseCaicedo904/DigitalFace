import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import {
  applyHead,
  buildHead,
  SeoContext,
  type PageMetadataOptions,
} from "@/lib/seo";
export type { PageMetadataOptions } from "@/lib/seo";

/** The same localized copy supplies build-time HTML and client navigation. */
export function usePageMetadata(
  title: string,
  description: string,
  options: PageMetadataOptions = {},
) {
  const { pathname } = useLocation();
  const collector = useContext(SeoContext);
  const { image, noindex } = options;
  if (collector)
    collector.head = buildHead(pathname, title, description, options);
  useEffect(() => {
    applyHead(buildHead(pathname, title, description, { image, noindex }));
    trackPageView(pathname, title);
  }, [pathname, title, description, image, noindex]);
}
