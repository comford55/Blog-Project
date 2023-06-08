const express = require("express");
const router = express.Router();

const controllers = require("../controllers");

router.get("/users", (req, res, next) => {
  res.json({ message: "users" });
});

router.post("/user", async (req, res, next) => {
  const creatUser = await controllers.userController.createUser(req, res);
});

router.post("/user/:id", async (req, res, next) => {
    const userProfile = await controllers.userController.getUserProfile(req, res);
});

module.exports = router;
