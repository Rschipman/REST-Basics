const express = require("express");
const app = express();

app.get("/tacos", (req, res) => {
  res.send("GET /tacos request");
});

app.post("/tacos", (req, res) => {
  res.send("POST /tacos request");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
