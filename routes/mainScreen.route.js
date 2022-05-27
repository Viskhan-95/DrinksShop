const { Router } = require("express");
const { mainScreenController } = require("../controllers/mainScreen.controller");

const route = Router();

route.get('/drinks', mainScreenController.getDrinks)

module.exports = route;