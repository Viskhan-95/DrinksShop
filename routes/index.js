const {Router} = require("express")

const router = Router();

router.use(require("./mainScreen.route"));
router.use(require("./infoScreen.route"));
router.use(require("./availableDrinks.route"));
router.use(require("./shopDrink.route"));

module.exports = router;