import * as express from "express";

declare global {
  namespace Express {
    interface Response {
      sendResponse: express.Response["send"];
    }
  }
}
