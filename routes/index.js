const Blog = require('./blogRoutes');
const User = require('./userRoutes');

const express = require('express');
const router = express.Router();

router.use(Blog);
router.use(User);

module.exports = router;