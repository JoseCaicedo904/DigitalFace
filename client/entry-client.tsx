import "./global.css";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { captureAttribution } from "./lib/attribution";

captureAttribution();
const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// A host's generic 404 document cannot know the requested language or pathname.
if (
  root.hasChildNodes() &&
  document.documentElement.dataset.prerendered === "true"
) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
