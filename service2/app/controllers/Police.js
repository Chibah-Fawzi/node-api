const { sequelize } = require("../config/db");
const PoliceModel = require("../models/Police");

async function getPolices(req, res) {
  PoliceModel.sync();
  const polices = await PoliceModel.findAll();

  res.json({ success: true, polices });
}

async function addPolice(req, res) {
  const newPolicy = await PoliceModel.create({
    CODEINTE: req.body.CODEINTE,
    NUMEPOLI: req.body.NUMEPOLI,
    AVENMODI: req.body.AVENMODI,
    CODECATE: req.body.CODECATE,
    CODEASSU: req.body.CODEASSU,
    DATEEFFE: req.body.DATEEFFE,
    CODEDURE: req.body.CODEDURE,
    DATEECHE: req.body.DATEECHE,
    DATEANNI: req.body.DATEANNI,
    CODECONV: req.body.CODECONV,
    TYPECONT: req.body.TYPECONT,
    REFEINTE: req.body.REFEINTE,
    CODTYPTA: req.body.CODTYPTA,
    TAUXREDU: req.body.TAUXREDU,
    FLAGREDU: req.body.FLAGREDU,
    CODINTGE: req.body.CODINTGE,
    CODTIMDI: req.body.CODTIMDI,
    NOMTIMDI: req.body.NOMTIMDI,
    CODREGBM: req.body.CODREGBM,
    BONUMALU: req.body.BONUMALU,
    TAUCOMGE: req.body.TAUCOMGE,
    TAUCOMAP: req.body.TAUCOMAP,
    FLAEXOTA: req.body.FLAEXOTA,
    DATEVALI: req.body.DATEVALI,
    DATEANNU: req.body.DATEANNU,
    CODEAPPO: req.body.CODEAPPO,
    CODEPERI: req.body.CODEPERI,
    DATETERM: req.body.DATETERM,
    OBSESOUS: req.body.OBSESOUS,
    NUME_LOT: req.body.NUME_LOT,
    FLAGANNU: req.body.FLAGANNU,
    OBSEPOLI: req.body.OBSEPOLI,
  });

  res.json({ success: true, newPolicy });
}

const PoliceController = {
  addPolice,
  getPolices,
};

module.exports = PoliceController;
