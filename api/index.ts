import { createServer } from "../server/index.js";

export default createServer();

export const config = {
  api: {
    bodyParser: false,
  },
};
