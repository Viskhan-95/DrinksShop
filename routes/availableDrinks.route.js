const { Router } = require("express");
const { availableDrinkController } = require("../controllers/availableDrink.controller");


const route = Router();

route.get('/drinks/in/stock', availableDrinkController.getDrinks);

module.exports = route;