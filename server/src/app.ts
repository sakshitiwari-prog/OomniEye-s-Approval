import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import { config } from "./config";

export function createApp() {
  const app = express();

  app.use(cors({ origin: config.clientOrigin }));
  app.use(express.json({ limit: "100kb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use((_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  // Last-resort handler: never leak a stack trace or a raw 500 page to the client.
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  });

  return app;
}
