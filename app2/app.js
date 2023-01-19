const express = require("express");
const app = express();
const port = 3001;
const oracledb = require("oracledb");
const bodyParser = require("body-parser");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "root",
      connectString: "localhost/mybdd",
    });

    const result = await connection.execute(
      `SELECT * FROM Persons`,
      [], // no bind variables
      {
        resultSet: true, // return a ResultSet (default is false)
      }
    );

    const rs = result.resultSet;

    let row;
    let array = [];

    while ((row = await rs.getRow())) {
      array.push(row);
    }

    await rs.close();
    res.json(array);
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.post("/add", async (req, res) => {
  let connection;
  connection = oracledb.getConnection({
    user: "system",
    password: "root",
    connectString: "localhost/mybdd",
  });
  let bind = [
    req.body.id,
    req.body.lname,
    req.body.fname,
    req.body.address,
    req.body.city,
  ];
  let result = (await connection).execute(
    `INSERT INTO Persons VALUES (:PERSONID, :LASTNAME, :FIRSTNAME, :ADDRESS, :CITY)`,
    bind,
    { autoCommit: true }
  );

  let data = await result;
  res.json({ msg: "Rows inserted " + data.rowsAffected, data: bind });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
