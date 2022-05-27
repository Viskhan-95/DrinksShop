const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
    name:String,
    price:Number,
    isDrink:Boolean,
    isCaffeineDrink:Boolean,
    volume: Number,
    descriptionDrink: String
});

const Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink;