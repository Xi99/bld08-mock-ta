const express = require("express");
const cors = require("cors");
const pgdb = require("./db/db");
const bp = require("body-parser");

const app = express();
const port = 8080;

app.use(cors());
app.use(bp.json());
// app.get(req, res) ...
app.get("/cows", (req, res) => {
  pgdb.getAllCows().then(results => res.send(results));
});

app.post("/cows", (req, res) => {
  pgdb.addCow(req.body).then(res.sendStatus(201));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
