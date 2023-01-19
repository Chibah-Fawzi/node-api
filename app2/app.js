const express = require("express");
const app = express();
const port = 3000;
const oracledb = require("oracledb");
const bodyParser = require("body-parser");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "ciar",
      connectString: "localhost/data.laciar.local",
    });

    const result = await connection.execute(
      `SELECT * FROM DELPHES.POLICE`,
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
    password: "ciar",
    connectString: "localhost/data.laciar.local",
  });
  let bind = [
    req.body.CODEINTE,
    req.body.NUMEPOLI,
    req.body.AVENMODI,
    req.body.CODECATE,
    req.body.CODEASSU,
    req.body.DATEFFE,
    req.body.CODEDURE,
    req.body.DATEECHE,
    "",
    "",
    "",
    "",
    "",
    0,
    "",
    0,
    "",
    0,
    "",
    1,
    1,
    1,
    1,
    "",
    "",
    1,
    "",
    "",
    "",
    0,
    "",
    "",
  ];
  let result = (await connection).execute(
    `INSERT INTO DELPHES.SV_IMAGE_POLICE_FLAEXOTA VALUES (:CODEINTE, :NUMEPOLI, :AVENMODI,:CODECATE,:CODEASSU,:DATEFFE,:CODEDURE,:DATEECHE,:DATEANNI,:CODECONV,:TYPECONT,:REFEINTE,:CODTYPTA,:TAUXREDU,:FLAGREDU,:CODINTGE,:CODTIMDI,:NOMTIMDI,:CODREGBM,:BONUMALU,:TAUCOMAP,:TAUCOMGE,:FLAEXOTA,:DATEVALI,:DATEANNU,:CODEAPPO,:CODEPERI,:DATETERM,:OBSESOUS,:NUME_LOT,:FLAGANNU,:OBSEPOLI)`,
    bind,
    { autoCommit: true }
  );

  let data = await result;
  res.json({ msg: "Rows inserted " + data.rowsAffected, data: bind });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
