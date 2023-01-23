let liste = [
  {
    name: "CODEINTE",
    type: "NUMBER",
  },
  {
    name: "NUMEPOLI",
    type: "NUMBER",
  },
  {
    name: "AVENMODI",
    type: "NUMBER",
  },
  {
    name: "CODECATE",
    type: "NUMBER",
  },
  {
    name: "CODEASSU",
    type: "NUMBER",
  },
  {
    name: "DATEEFFE",
    type: "DATE",
  },
  {
    name: "CODEDURE",
    type: "VARCHAR2",
  },
  {
    name: "DATEECHE",
    type: "DATE",
  },
  {
    name: "DATEANNI",
    type: "DATE",
  },
  {
    name: "CODECONV",
    type: "VARCHAR2",
  },
  {
    name: "TYPECONT",
    type: "VARCHAR2",
  },
  {
    name: "REFEINTE",
    type: "VARCHAR2",
  },
  {
    name: "CODTYPTA",
    type: "VARCHAR2",
  },
  {
    name: "TAUXREDU",
    type: "NUMBER",
  },
  {
    name: "FLAGREDU",
    type: "VARCHAR2",
  },
  {
    name: "CODINTGE",
    type: "NUMBER",
  },
  {
    name: "CODTIMDI",
    type: "VARCHAR2",
  },
  {
    name: "NOMTIMDI",
    type: "NUMBER",
  },
  {
    name: "CODREGBM",
    type: "VARCHAR2",
  },
  {
    name: "BONUMALU",
    type: "NUMBER",
  },
  {
    name: "TAUCOMAP",
    type: "NUMBER",
  },
  {
    name: "TAUCOMGE",
    type: "NUMBER",
  },
  {
    name: "FLAEXOTA",
    type: "NUMBER",
  },
  {
    name: "DATEVALI",
    type: "DATE",
  },
  {
    name: "DATEANNU",
    type: "DATE",
  },
  {
    name: "CODEAPPO",
    type: "NUMBER",
  },
  {
    name: "CODEPERI",
    type: "VARCHAR2",
  },
  {
    name: "DATETERM",
    type: "DATE",
  },
  {
    name: "OBSESOUS",
    type: "VARCHAR2",
  },
  {
    name: "NUME_LOT",
    type: "NUMBER",
  },
  {
    name: "FLAGANNU",
    type: "VARCHAR2",
  },
  {
    name: "OBSEPOLI",
    type: "VARCHAR2",
  },
];

let result = liste.map((e) => {
  return {
    [e.name]: {
      type:
        e.type === "DATE"
          ? "DataTypes" + "." + e.type
          : "DataTypes" + "." + e.type + "(5, 0)", // maps to INTEGER
      autoIncrement: e.name === "CODEINTE" ? true : false, // automatically increment the value
      primaryKey: e.name === "CODEINTE" || "NUMEPOLI" ? true : false, // this is the table's primary key
      allowNull: false, // value cannot be null
    },
  };
});
