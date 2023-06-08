const express = require("express");
const router = express.Router();

const controllers = require("../controllers");

router.post("/user", controllers.userController.createUser);

router.get("/user/:id", controllers.userController.getUserProfile);

module.exports = router;
