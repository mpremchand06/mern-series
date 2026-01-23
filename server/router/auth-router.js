const express = require("express");
const router = express.Router();
const { home , register ,signup  } = require("../controller/auth-controller.js")

router.route("/").get(home)
router.route("/register").get(register)
router.route("/signup").get(signup)


module.exports = router