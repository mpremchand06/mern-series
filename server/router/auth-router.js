const express = require("express");
const router = express.Router();
const { home , register ,login  } = require("../controller/auth-controller.js")

const {signupSchema , loginSchema} = require("../validators/auth-validator.js")
const validate = require("../middlewares/validate-middlewares.js")

router.route("/").get(home)
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema),login)


module.exports = router