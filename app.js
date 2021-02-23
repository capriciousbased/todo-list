const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(3000, function () {
  console.log("Server start on port 3000");
});