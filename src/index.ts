import express = require("express");
import "dotenv/config";

const main = () => {
  const server = express();

  server.listen(process.env.PORT, () => {
    console.log("Start server");
  });

  server.get("/", (req, res) => {
    res.send("Start");
  });
};
main();
