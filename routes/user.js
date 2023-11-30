var express = require("express");
var router = express.Router();
const { userController } = require("../controller/index");
const authController = require("../controller/common/authController");
router.get("/", authController.authenticateToken, userController.getUsers);

router.post("/createUser", userController.createUsers);
router.post("/login", authController.login);
module.exports = router;
