const Blog = require('./blog');

const express = require('express');
const router = express.Router();

router.use(Blog);

module.exports = router;