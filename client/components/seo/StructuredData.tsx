import { useContext, useEffect } from "react";
import { SeoContext, serializeJsonLd } from "@/lib/seo";

type StructuredDataProps = {
  /** Stable per schema block, so a route change replaces rather than duplicates it. */
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Injects a JSON-LD block into <head> and removes it on unmount.
 *
 * It renders nothing. Keeping the script in <head> rather than in the component
 * tree means React never has to reconcile it, and the cleanup guarantees a page
 * cannot leave its schema behind for the next route.
 */
export function StructuredData({ id, data }: StructuredDataProps) {
  const serialized = serializeJsonLd(data);
  const collector = useContext(SeoContext);
  if (collector) collector.schemas.set(id, serialized);

  useEffect(() => {
    const elementId = `ld-${id}`;
    let script = document.head.querySelector<HTMLScriptElement>(
      `script#${CSS.escape(elementId)}`,
    );

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = elementId;
      document.head.appendChild(script);
    }

    script.textContent = serialized;

    return () => {
      script?.remove();
    };
  }, [id, serialized]);

  return null;
}
