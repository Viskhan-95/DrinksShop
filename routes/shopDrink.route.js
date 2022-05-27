const { Router } = require("express");
const { shopDrinkController } = require("../controllers/shopDrink.controller");

const route = Router();

route.post('/drinks', shopDrinkController.postDrink);
route.delete('/drinks/:id', shopDrinkController.deleteDrink);
route.patch('/drinks/:id', shopDrinkController.patchDrink);

module.exports = route;