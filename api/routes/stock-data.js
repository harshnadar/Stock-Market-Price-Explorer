const express = require('express');
const bodyParser = require('body-parser');

const db = require('../../config/db');
const date_formatter = require('../utils/date_formatter');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// @route    GET api/stock-data/:company/:start_date/:end_date
// @desc     get a particular company's data between start_date and end_date
// @access   Public
router.get('/:company/:start_date/:end_date', async (req, res) => {
    try {
        let symbol = req.params.company.toUpperCase();
        let start_date = req.params.start_date;
        let end_date = req.params.end_date;
        let ans = [];

        for(let date = new Date(start_date); date<= new Date(end_date); date.setDate(date.getDate()+1)){
            let query = `SELECT TIMESTAMP, CLOSE FROM nse_data WHERE SYMBOL="${symbol}" AND TIMESTAMP="${date_formatter(date)}"`;
            let temp = await (await db).execute(query);
            if(temp[0].length)
                ans.push(temp[0][0]);
        }
        res.status(200).send(ans.reverse());
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message);
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;

