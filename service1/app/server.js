const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const db = require("./config/db");
const router = express.Router();

const police = require("./routes/Police");

require("dotenv").config();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!")).use("/", router);

police.init(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
