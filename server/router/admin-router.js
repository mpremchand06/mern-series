const express = require("express");
const { getAllUsers, getAllContacts } = require("../controller/admin-controller");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

module.exports = router;
