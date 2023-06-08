const express = require("express");
const router = express.Router();

const controllers = require("../controllers");

router.get("/users", (req, res, next) => {
  res.json({ message: "users" });
});

router.post("/user", async (req, res, next) => {
  const creatUser = await controllers.userController.createUser(req, res);
});

module.exports = router;
