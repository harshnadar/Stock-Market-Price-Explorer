const express = require('express');
const bodyParser = require('body-parser');

const db = require('../config/db')
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// @route    GET api/stock-data/:company/:date
// @desc     get a particular 
// @access   Public
router.get('/:company/:date', async (req, res) => {
    try {
        let symbol = req.params.company;
        symbol = symbol.toString();
        let date = req.params.date;
        date = date.toString();
        let query = `SELECT * FROM nse_data WHERE SYMBOL="${symbol}" AND TIMESTAMP="${date}"`;
        db.query(query, (err, results) => {
            if(err) throw err;
            res.status(200).send(results);
        });
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message);
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;

