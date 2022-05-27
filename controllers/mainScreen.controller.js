const { default: mongoose } = require("mongoose");
const Drinks = require("../models/drinks.model");

module.exports.mainScreenController = {
    getDrinks: (reg, res) => {
        Drinks.find()
        .then((data) => {
            res.json(data);
        })
    }
}