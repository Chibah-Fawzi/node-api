const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

let PoliceModel = sequelize.define(
  "POLICE",
  {
    CODEINTE: {
      type: DataTypes.NUMBER(5, 0), // maps to INTEGER
      autoIncrement: true, // automatically increment the value
      primaryKey: true, // this is the table's primary key
      allowNull: false, // value cannot be null
    },
    NUMEPOLI: {
      type: DataTypes.NUMBER(10, 0),
      allowNull: true,
    },
    AVENMODI: {
      type: DataTypes.NUMBER(4, 0),
      allowNull: true,
    },

    CODECATE: {
      type: DataTypes.NUMBER(5, 0),
      allowNull: true,
    },

    CODEASSU: {
      type: DataTypes.NUMBER(12, 0),
      allowNull: true,
    },

    DATEEFFE: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    CODEDURE: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    DATEECHE: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    DATEANNI: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    CODECONV: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    TYPECONT: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    REFEINTE: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    CODTYPTA: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    TAUXREDU: {
      type: DataTypes.NUMBER(4, 2),
      allowNull: true,
    },

    FLAGREDU: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    CODINTGE: {
      type: DataTypes.NUMBER(5, 0),
      allowNull: true,
    },

    CODTIMDI: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    NOMTIMDI: {
      type: DataTypes.NUMBER(2, 0),
      allowNull: true,
    },

    CODREGBM: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    BONUMALU: {
      type: DataTypes.NUMBER(3, 2),
      allowNull: true,
    },

    TAUCOMAP: {
      type: DataTypes.NUMBER(4, 2),
      allowNull: true,
    },

    TAUCOMGE: {
      type: DataTypes.NUMBER(4, 2),
      allowNull: true,
    },

    FLAEXOTA: {
      type: DataTypes.NUMBER(2, 0),
      allowNull: true,
    },

    DATEVALI: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    DATEANNU: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    CODEAPPO: {
      type: DataTypes.NUMBER(5, 0),
      allowNull: true,
    },

    CODEPERI: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    DATETERM: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    OBSESOUS: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    NUME_LOT: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0,
    },

    FLAGANNU: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "N",
    },

    OBSEPOLI: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    // paranoid: true,
    // // disable the modification of table names; By default, sequelize will automatically
    // // transform all passed model names (first parameter of define) into plural.
    // // if you don't want that, set the following
    // freezeTableName: true,
    tableName: `POLICE`,
  }
);

// let PoliceModel = sequelize.define(
//   "TEST",
//   {
//     ID: {
//       type: DataTypes.DECIMAL(5, 0), // maps to INTEGER
//       autoIncrement: true, // automatically increment the value
//       allowNull: false, // value cannot be null
//     },
//     NAME: {
//       type: DataTypes.STRING(20, 0), // maps to INTEGER
//    // automatically increment the value
//       primaryKey: false, // this is the table's primary key
//       allowNull: true, // value cannot be null
//     },
//     AGE: {
//       type: DataTypes.DECIMAL(10, 0), // maps to INTEGER
//    // automatically increment the value
//       primaryKey: false, // this is the table's primary key
//       allowNull: true, // value cannot be null
//     },
//   },
//   {
//     timestamps: false,
//     // don't delete database entries but set the newly added attribute deletedAt
//     // to the current date (when deletion was done). paranoid will only work if
//     // timestamps are enabled
//     // paranoid: true,
//     // // disable the modification of table names; By default, sequelize will automatically
//     // // transform all passed model names (first parameter of define) into plural.
//     // // if you don't want that, set the following
//     // freezeTableName: true,
//     tableName: `TEST`,
//   }
// );

sequelize.models.PoliceModel;

// sequelize.sync();
module.exports = PoliceModel;
