const { User } = require("../models");
const bcrypt = require("bcrypt");

const middlewares = require("../middlewares");

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
  const user = await User.findOne(userId);
  if (!user) {
    const errorHandling = middlewares.NotFound.notFound(res, "User not found");
  }
  res.status(200).json({data: user});
};

module.exports = { createUser };
