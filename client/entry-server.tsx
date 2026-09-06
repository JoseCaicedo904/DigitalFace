import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { SeoContext, renderHead, type SeoCollector } from "./lib/seo";

/** Real React HTML, with lazy content resolved. No browser or API calls. */
export function render(url: string) {
  return new Promise<{ body: string; head: string; locale: string }>(
    (resolve, reject) => {
      const collector: SeoCollector = { schemas: new Map() };
      const output = new PassThrough();
      let body = "";
      let failed = false;
      output.on("data", (chunk) => {
        body += chunk.toString();
      });
      output.on("error", reject);
      output.on("end", () => {
        if (failed) return;
        if (!collector.head)
          return reject(new Error("Missing metadata: " + url));
        resolve({
          body,
          head: renderHead(collector.head, collector.schemas),
          locale: collector.head.locale,
        });
      });
      const stream = renderToPipeableStream(
        <StaticRouter location={url}>
          <SeoContext.Provider value={collector}>
            <App />
          </SeoContext.Provider>
        </StaticRouter>,
        {
          onAllReady() {
            stream.pipe(output);
          },
          onError(error) {
            failed = true;
            reject(error);
          },
        },
      );
    },
  );
}
