const { User } = require("../models");
const bcrypt = require("bcrypt");

const passwordEncrypt = (password) => {
  return bcrypt.hash(password, 12);
};

const createUser = (res, req, next) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const passwordEncrypted = passwordEncrypt(password);

  const user = new User({
    firstName: fname,
    lastName: lname,
    username: username,
    email: email,
    password: passwordEncrypted,
  });

  user
    .save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
