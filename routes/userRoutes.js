const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.json({message: "users"});
});

module.exports = router;