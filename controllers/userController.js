const { User } = require("../models");
const bcrypt = require("bcrypt");

const middlewares = require("../middlewares");
const utils = require("../utils");

const passwordEncrypt = (password) => {
  return bcrypt.hash(password, 12);
};

const createUser = async (req, res) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  passwordEncrypt(password)
    .then((passwordEncrypted) => {
      const user = new User({
        firstName: fname,
        lastName: lname,
        username: username,
        email: email,
        password: passwordEncrypted,
      });

      return user.save();
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      const errorHandling = middlewares.BadRequest.badRequest(res, err.message);
    });
};

const getUserProfile = async (req, res) => {
  const userId = req.params.id;
  const validUserId = utils.validUserId(userId);
  if (!validUserId) {
    await middlewares.BadRequest.badRequest(res, "Invalid user ID");
    return;
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      await middlewares.NotFound.notFound(res, "User not found");
      return;
    }

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser, getUserProfile };
