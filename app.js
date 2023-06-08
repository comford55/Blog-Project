require("dotenv").config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const Hostname = process.env.HOSTNAME;

app.listen(PORT, Hostname, () => {
    console.log(`Server running on port ${PORT}`);
});