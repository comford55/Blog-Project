const mongoose = require("mongoose");

const validUserId = (userId) => {
  return mongoose.Types.ObjectId.isValid(userId);
};

module.exports = { validUserId };
