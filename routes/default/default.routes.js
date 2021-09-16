const router = require("express").Router();
// ES6 Destructuring
const {index, about} = require("../../controllers/default/default.controller")

router.get("/", index);

router.get("/about", about);

module.exports = router;