const express = require('express');
const router = express.Router();

router.use('/stock-price-data', require('./stock-data'));

module.exports = router;