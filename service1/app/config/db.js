const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "oracle",
  username: "DELPHES",
  password: "ciar",
  dialectOptions: { connectString: "localhost/data.laciar.local" },
});
try {
  sequelize.authenticate();
  console.log("Connection to the Database has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
