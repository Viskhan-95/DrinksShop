const { default: mongoose } = require("mongoose");
const Drinks = require("../models/drinks.model");

module.exports.infoScreenController = {
    getDrinks: (reg, res) => {
        Drinks.find(reg.params.id)
        .then((data) => {
            res.json(data[0].descriptionDrink);
        })
    }
}