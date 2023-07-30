import express = require("express");
import "dotenv/config";
import { DocumentRouter } from "./routes/document.routes";
import cors from "./middleware/cors.middleware";

const server = express();

server.use(express.json());
server.use(cors);

server.use("/api/document", DocumentRouter);

async function start() {
  server.listen(process.env.PORT, () => {});
}

start();
