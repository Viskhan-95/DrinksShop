const { default: mongoose } = require("mongoose");
const Drinks = require("../models/drinks.model");

module.exports.shopDrinkController = {
    postDrink: (reg, res) => {
        Drinks.create({
            name: reg.body.name,
            price: reg.body.price,
            isDrink: reg.body.isDrink,
            isCaffeineDrink: reg.body.isCaffeineDrink,
            volume: reg.body.volume,
            descriptionDrink: reg.body.descriptionDrink
        })
        .then(() => {
            res.json("Напиток добавлен")
        })
    },
    deleteDrink: (reg, res) => {
        Drinks.findByIdAndRemove(reg.params.id)
        .then(() => {
            res.json("Напиток удален")
        })
    },
    patchDrink: (reg, res) => {
        Drinks.findByIdAndUpdate(reg.params.id)
    }
}