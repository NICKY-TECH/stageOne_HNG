const { join } = require("path");

const { userDetails } = require(join(
  __dirname,
  "controller",
  "userDetails.controller"
));

const express = require("express");

const app = express();

const PORT = 3000 || process.env.PORT;

app.listen(`${PORT}`, () => {
  console.log("server is currently running");
});

app.get("/api", userDetails);
