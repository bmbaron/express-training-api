const express = require("express")
const router = express.Router();
const fs = require('fs');

const trainRoutes = require('./edit-trains.js');
router.use(trainRoutes);

module.exports = router;
