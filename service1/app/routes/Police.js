const PoliceController = require("../controllers/Police");

function init(router) {
  router
    .route("/polices")
    .post(PoliceController.addPolice)
    .get(PoliceController.getPolices);
}
module.exports.init = init;
