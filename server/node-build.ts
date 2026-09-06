import path from "node:path";
import { createServer } from "./index";
import { staticSite } from "./static-site";
const app = createServer();
const port = process.env.PORT || 3000;
app.use(staticSite(path.join(import.meta.dirname, "../spa")));
const server = app.listen(port, () =>
  console.log("DigitalFace production server listening on port " + port),
);
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());
