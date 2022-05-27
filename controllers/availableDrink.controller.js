const { default: mongoose } = require("mongoose");
const Drinks = require("../models/drinks.model");

module.exports.availableDrinkController = {
    getDrinks: (reg, res) => {
        Drinks.find({isDrink: true})
        .then((data) => {
            res.json(data);
        })
    }
}