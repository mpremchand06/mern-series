const express = require("express");
const router = express.Router();
const { home , register ,login  } = require("../controller/auth-controller.js")

const signupSchema = require("../validators/auth-validator.js")
const validate = require("../middlewares/validate-middlewares.js")

router.route("/").get(home)
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(login)


module.exports = router