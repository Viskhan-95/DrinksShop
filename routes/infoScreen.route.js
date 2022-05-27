const { Router } = require("express");
const { infoScreenController } = require("../controllers/infoScreen.controller");

const route = Router();

route.get('/drinks/:id', infoScreenController.getDrinks);

module.exports = route;